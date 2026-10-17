# Cloudflareで最小deployを確認する

## 向く作品

軽いAPIと画面をまとめたい作品。Workers Static Assetsで静的ファイルも配信できます。PagesのGit連携は、静的サイト中心の別の選択肢です。

## 初期準備

1. 公式dashboardで自分のアカウント・Workers/Pages権限・利用条件を確認する。
2. 使用するrepoとWorkerまたはPages projectを確認し、公開担当を決める。
3. Workersではstatic assetsの公式手順を使い、`smoke-page/` を配置する。Wranglerのexample設定はnameと相対パスを実際の配置に合わせる。
4. `wrangler dev` でローカル確認後、選択した対象へ `wrangler deploy`。ページのmarkerとボタン操作を確認する。
5. 小さい更新を反映し、採用commit・URL・担当・更新方法をhandoff票へ記録する。

Pagesを使う場合は、公式のGit integration手順でproduction branch、build、outputを設定します。Workers用とPages用の設定を混ぜないでください。

## 本体への接続

UIとAPIを分担し、本体repoを正本にします。secrets、WebSocket、長時間処理、Node互換性は作品で必要になったものを別に検証します。static deployだけで、これらも動くとは保証しません。

公式: https://developers.cloudflare.com/workers/static-assets/get-started/ 、https://developers.cloudflare.com/workers/static-assets/ 、https://developers.cloudflare.com/pages/get-started/git-integration/
