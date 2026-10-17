# ChatGPT Sitesで最小deployを確認する

## 向く作品

Codex App / ChatGPTの対応ワークフローから軽量Webを作り、公開担当を決めて進める作品。

## 初期準備

1. 対象プラン、Site owner、一般公開の可否を確認する。
2. 使用するSiteを確定し、`smoke-page/` の中立ページを対応ワークフローへ渡す。
3. 保存と公開を分けて確認する。既存Siteの公開範囲を意図せず変えない。
4. 返されたURLでmarkerとボタンを確認し、意図した閲覧者が開けるか確認する。
5. 小さい更新を反映し、担当、版、採用commit、更新方法をhandoff票へ記録する。

## 共同開発から公開

コード変更は本体repoへ集め、公開担当1人が採用commitをSitesへ反映します。GitHubへのpushがSitesへ自動反映される前提は置きません。Site上で直接直した差分は、本体repoへ戻してから次の更新に進みます。

同じworkspaceのactive member向け共同編集と、外部viewerの招待を区別してください。外部viewerはeditorではありません。connected-app利用はworkspace内private Site向けなので、一般公開作品の必須条件にしないでください。

公式: https://learn.chatgpt.com/docs/sites/creating-a-site 、https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites 、https://learn.chatgpt.com/docs/sites/data-and-connections
