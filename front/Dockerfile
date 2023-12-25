FROM node:19.4.0

WORKDIR /app

# プロジェクトのpackage.jsonとyarn.lockをコピー
COPY package.json yarn.lock ./

RUN yarn install

# その他のファイルをコピー
COPY . .

RUN yarn build

COPY .next ./.next

# アプリケーションのビルドまたは起動のコマンド
CMD ["yarn", "dev"]
