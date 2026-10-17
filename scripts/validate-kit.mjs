import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Script} from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(readFileSync(resolve(root,p),'utf8'));
const m=read('kit-manifest.json'), r=read('readiness.template.json');
read('kit-manifest.schema.json');read('hosting/cloudflare/wrangler.example.json');
if(m.schemaVersion!=='1.0'||m.adoption!=='optional-copy-by-component')throw new Error('Manifest header');
if(new Set(m.components.map(c=>c.id)).size!==m.components.length)throw new Error('Duplicate ids');
for(const c of m.components){
 for(const k of ['purpose','license','preview','importSteps','dependencies','sourceFiles'])if(!(k in c))throw new Error(`${c.id}: ${k}`);
 for(const f of [...c.sourceFiles,c.preview.split('#')[0]])if(f.includes('..')||!existsSync(resolve(root,f)))throw new Error(`Invalid or missing path: ${f}`);
 if(c.networkAccess!==false)throw new Error('Unexpected network requirement');
}
if(r.kind!=='blank-team-readiness-template'||r.team!==null||r.checkedAt!==null||r.hosts.length!==3)throw new Error('Public readiness must be a blank template');
for(const h of r.hosts)for(const [key,value] of Object.entries(h))if(key!=='id'&&value!==null)throw new Error('Keep personal readiness results outside the public repository');
function walk(p){for(const e of readdirSync(p,{withFileTypes:true})){const f=resolve(p,e.name);if(e.isDirectory())walk(f);else if(f.endsWith('.md')){const s=readFileSync(f,'utf8');if((s.match(/```/g)||[]).length%2)throw new Error(`Unclosed fence: ${f}`);}}}
walk(root);
const hosts=read('hosts.json');if(hosts.kind!=='generic-hosting-guidance'||hosts.hosts.length!==3)throw new Error('Expected generic guidance for 3 hosts');
for(const h of hosts.hosts)for(const key of ['currentStatus','confirmed','missing','nextStep','ready','connectionEvidence','url','owner'])if(key in h)throw new Error('Personalized hosting state must not be published');
for(const f of ['preview/index.html','smoke-page/index.html']){
 const html=readFileSync(resolve(root,f),'utf8');
 for(const chunk of html.split('<script>').slice(1))new Script(chunk.split('</script>')[0],{filename:f});
}
console.log('PASS: component manifest, sources, generic host guidance, empty readiness template, Markdown and JavaScript syntax. No hosting or application claims.');
