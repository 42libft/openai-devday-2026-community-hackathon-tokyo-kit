# 任意採用のUI 3候補

| 候補 | 用途 | 依存 | 使わなくてよい場合 |
|---|---|---|---|
| input | ラベル・説明・入力・送信ボタン | HTML/CSSのみ | 音声専用、独自の入力画面 |
| result-card | 1件の結果・補足・操作を表示 | HTML/CSSのみ | 地図、ゲーム、canvas中心 |
| status | loading / empty / errorと再試行導線 | HTML/CSSのみ | チーム側に既存の状態表示がある |

各component.htmlとcomponent.cssを必要分だけコピーします。イベントとデータ接続は当日のアプリ側が担当。preview/index.htmlは見本だけで、APIに接続しません。詳細はkit-manifest.jsonを参照。

本体のglobal reset、ルーター、認証、保存、API呼び出しは含めません。色と余白は部品CSSから変更でき、他の部品を一緒に導入する必要はありません。
