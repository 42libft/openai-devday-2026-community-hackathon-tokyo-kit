# OpenAI DevDay 2026 Community Hackathon Tokyo 準備キット（非公式）

OpenAI DevDay 2026 Community Hackathon Tokyoの参加準備に向けた非公式キットです。OpenAIやイベント主催者の提供・保証を示すものではありません。

リポジトリ名: `openai-devday-2026-community-hackathon-tokyo-kit`

短時間の共同開発で、必要な部品と手順だけを選んで使う準備kitです。**作品本体ではありません。** 本体repoとは分け、採用したファイルだけを取り込みます。特定のフレームワークや公開先は必須にしていません。

## 入っているもの

- `ui/`: 入力欄・結果カード・状態表示の3部品。HTML/CSSのみ、外部依存・API接続なし。
- `preview/index.html`: 3部品を確認するローカル見本。
- `kit-manifest.json`: 部品ごとの用途、依存、ライセンス状態、preview、取り込み・取り外し手順。
- `app-template/`: 本体repoへ選択して取り込めるREADME、CONTRIBUTING、AGENTS、PRテンプレ、担当境界、最小CI、空欄.env.example。
- `smoke-page/index.html`: 公開手順を試す中立の小さいページ。
- `hosting/` と `hosts.json`: Vercel / Cloudflare / ChatGPT Sitesの一般的な準備・公開・handoff手順。
- `readiness.template.json` / `readiness-template.md`: 自分のチームで記入する空の確認表。実在アカウントの確認結果は含みません。

## 見る・検証する

追加パッケージなし、Node.js 24:

```sh
node scripts/validate-kit.mjs
node app-template/scripts/check-template.mjs
```

`preview/index.html` はブラウザーで直接開けます。HTTPで見る場合は、このフォルダで `python3 -m http.server 8000` を実行し、`http://localhost:8000/preview/` を開いてください。

## 本体へ取り込む

1. チームで用途・技術・部品の採否を決める。全部使う必要はありません。
2. manifestのsourceFilesだけをコピー。表示部品にモデル呼び出し、保存、認証を埋め込まず、本体側で接続します。
3. HTML idが重ならないよう調整し、必要なCSSだけ取り込みます。
4. 元repo、commit、元ファイル、依存・ライセンス、当日の変更を本体の `docs/prebuilt.md` に記録します。
5. 以後は本体で修正します。submodule化や実行時のkit依存は不要です。

app-templateは一括上書きせず、既存READMEやAGENTS.mdと突き合わせて必要部分だけ取り込んでください。既存の安全・担当指示は保ちます。

## 3つの公開先

事前には3ホストそれぞれで接続・中立の最小deploy・handoffを確認できます。当日の作品本体はチームで1つを選ぶと作業をまとめやすくなります。開始15分で選ぶ等の時間配分は提案であり、大会規則ではありません。

readinessテンプレを記入した実アカウント情報、private URL、内部ID、接続エラー、個別の進捗は、公開repoにcommitせず、チームの適切な非公開の場所へ保存してください。

## 検証範囲

付属CIは雛形の書式・必要ファイル・空欄envのみを検証します。実アプリのbuild、API、ブラウザー操作、公開先の権限、deploy成功を保証しません。詳しくは `VALIDATION.md`。

## ライセンスと利用前の確認

公開ライセンスは未指定です。MIT等のオープンソースライセンスが付与されたものとは扱わず、利用・再配布前に権利者の条件を確認してください。`LICENSE-NOTICE.md` とmanifestを参照。

ハッカソンでは主催者の持ち込み規則を優先してください。repoを分けるだけで事前制作が許可されるわけではありません。`BOUNDARY.md` に確認の考え方をまとめています。
