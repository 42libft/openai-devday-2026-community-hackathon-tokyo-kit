# チーム開発ガイド

既存のAGENTS.mdがある場合はこのファイルで置換せず、必要な節だけ統合してください。

- Codex CLI / Codex Appで開発する。
- 作業前にREADME.md、CONTRIBUTING.md、docs/ownership.md、docs/contract.mdを読む。
- 自分の担当ファイルに変更を絞る。他の人の変更を消さない。
- 共有設定・依存・API契約を変えるときは統合担当へ知らせる。
- 秘密情報をコード、ログ、ブラウザー用環境変数へ出さない。
- 小さいdraft PRにまとめ、実行した確認と未確認を区別する。
- 雛形の確認はnode scripts/check-template.mjs。実アプリ導入後のbuild/testはREADMEの確定コマンドに従う。
- repo作成、招待、公開、課金、認証・権限変更は、依頼・権限が確認された範囲だけで行う。
