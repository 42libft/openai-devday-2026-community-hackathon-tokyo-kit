import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const required = ['README.md','CONTRIBUTING.md','AGENTS.md','.env.example','.gitignore','.github/PULL_REQUEST_TEMPLATE.md','.github/workflows/minimum-checks.yml','docs/ownership.md','docs/contract.md','docs/prebuilt.md'];
for (const p of required) if (!existsSync(resolve(root,p))) throw new Error(`Missing: ${p}`);
for (const rawLine of readFileSync(resolve(root,'.env.example'),'utf8').split(String.fromCharCode(10))) {
  const line = rawLine.trim();
  if (!line.trim() || line.trim().startsWith('#')) continue;
  if (!/^[A-Z][A-Z0-9_]*=$/.test(line)) throw new Error('.env.example must contain names with empty values only');
}
for (const p of required.filter(p=>p.endsWith('.md'))) {
  const s=readFileSync(resolve(root,p),'utf8');
  if ((s.match(/```/g)||[]).length%2) throw new Error(`Unclosed code fence: ${p}`);
}
console.log('PASS: scaffold files, Markdown fences, empty .env.example. App/build/API/deploy not tested.');
