# ベースイメージ
FROM node:16-alpine

# OpenSSLをインストール
RUN apk update && apk add --no-cache openssl

# 作業ディレクトリの設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# Prisma の生成
RUN npx prisma generate

# Nest.js アプリケーションをビルド
RUN npm run build

# アプリケーションポートの公開
EXPOSE 8080

# アプリケーションの起動
CMD ["npm", "run", "start:prod"]
