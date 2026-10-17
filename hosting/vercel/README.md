# Vercelで最小deployを確認する

## 向く作品

チームが慣れたWebフレームワークを使い、repoとPRを中心に共同開発する作品。静的サイトと、対応するサーバー処理の両方が選べます。

## 初期準備

1. 自分が利用できるアカウント・team/scope・権限を確認する。
2. 使用するrepoとprojectを照合し、公開担当を決める。作成結果が不明な操作は、状態を確認してから次へ進む。
3. `smoke-page/` の中立ページで、選択した公開先の最小deployを試す。静的ページに不要なフレームワークやbuildを足さない。
4. 返されたURLでmarkerとボタン操作を確認する。保護されたpreviewと、一般閲覧者が開ける公開URLは区別する。
5. 小さい更新を1回反映し、担当・URL・更新方法をhandoff票へ記録する。

## 共同開発から公開

短いbranchとPRで本体repoへ統合し、公開担当が採用commitを反映します。Git連携を使う場合は、PR previewとproduction対象branchを確認してください。APIと環境変数は選んだフレームワークの公式方式に従います。

static deployの成功だけで、実API、secrets、長時間処理、利用枠の準備完了とは扱いません。確認結果を記入したhandoff票は、必要に応じて非公開で管理してください。

公式: https://vercel.com/docs/deployments 、https://vercel.com/docs/frameworks/frontend/vite
