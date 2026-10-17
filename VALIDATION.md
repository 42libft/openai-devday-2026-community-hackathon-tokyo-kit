# 検証範囲

この公開用パッケージは、ローカルで以下を検証しています。

- JSONとkit-manifestのJSON Schema
- YAML、雛形CIのイベントとread-only権限
- 必要ファイル、Markdown code fence、空欄.env.example
- UI/source/previewのパスとCSS参照
- HTML id重複、label参照、JavaScript構文
- 不正なmanifestと実値入り.env.exampleを検証が拒否すること
- 公開内容に個別アカウント情報、秘密情報、private URL、内部IDを含めないための全ファイル検査

ブラウザーの表示・操作、スクリーンリーダー、GitHub Actionsでの実行、実アプリのbuild/API、ホストへのdeploy、共同編集はこの検証に含みません。

```sh
node scripts/validate-kit.mjs
node app-template/scripts/check-template.mjs
```

本体へフレームワークを入れた最初のPRで、実際のinstall/build/必要な検査をCIへ追加してください。付属雛形CIだけでアプリが動くとは判断しません。

Actions参考: https://github.com/actions/checkout 、https://github.com/actions/setup-node 。2026-10-17に公式のv7例を確認。必要に応じて、確認した公式リリースのcommit SHAへ固定してください。
