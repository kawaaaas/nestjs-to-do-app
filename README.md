# TODO App API

このプロジェクトは、Nest.js と Prisma を使用して構築された TODO アプリケーションの API サーバーです。以下の手順に従って、Docker を使用してサーバーをセットアップし、起動することができます。

## 必要なツール

- Docker Desktop

## docker によるサーバーの起動

.envファイルにてsqliteの設定をしてください

`DATABASE_URL="file:./dev.db"`

ターミナル上で下記コマンドを実行しイメージをビルドしてください。

`docker build -t todo-app:latest .`

前回ビルドしたイメージからコンテナを起動する場合は以下のコマンドを実行してください。

`docker run -d -p 8080:8080 todo-app:latest`

起動しているコンテナを確認したい時は以下のコマンドを実行してください。

`docker ps`

起動しているコンテナを停止したい場合は以下のコマンドを実行してください。

`docker stop <CONTAINER ID>`


