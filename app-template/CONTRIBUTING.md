# 共同作業の最小ルール

## 作業開始

1. 担当する機能・ファイルをdocs/ownership.mdで確認する。
2. 最新mainから短いbranchを作る。例: feat/input、feat/model-call。
3. 作業途中でもdraft PRを作り、入出力と未完成箇所を共有する。
4. 20〜40分程度を目安に、動く小さな差分で統合する。時間は提案。

## 衝突を避ける

- package.json、lockfile、route/ルート画面、グローバルCSS、CI、公開設定、contract変更は統合担当を窓口にする。
- 依存追加は担当へ相談し、複数人が別々のlockfileを更新しない。
- 他の担当の変更を上書きしない。一括format、全体rename、共有branchのforce pushは避ける。
- 各自のCodexに担当ファイルと他の人の並行作業を伝える。

## PRとmerge

PRは「できること / 確認結果 / 未完成 / 共通ファイル」の4点。型検査やbuildがある場合はその結果も書く。

統合担当が差分と主導線を確認し、チームの合意・権限の範囲でmergeする。mainへ入ったら他の担当へ知らせる。公開担当は採用commitを記録して公開する。最後に巨大PRをまとめない。

## kitの取り込み

必要なUIだけコピーし、依存・CSS・ライセンス条件を確認。docs/prebuilt.mdへ元repo・commit・ファイル・当日変更を記録。以後は本体で修正し、kitを同時更新しない。

## 公開先

事前にはVercel・Cloudflare・Sitesの各接続、最小deploy、handoffを確認。当日の作品本体は1つを選ぶ。Sitesを選ぶ場合も本体repoを正本にし、公開担当1人で反映する。外部viewerがそのままeditorになれるとは限らない。
