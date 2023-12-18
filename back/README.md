# README

git cloneした後、

## `yoga_zukan`ディレクトリで一気に実行

```
# yoga_zukanディレクトリで実行
docker-compose build
docker-compose run front yarn install
docker-compose run --rm back bundle install
docker-compose build back
docker-compose run --rm back rails db:create
docker-compose up
```

## ディレクトリを移動しながら

```
# yoga_zukanディレクトリで実行
docker-compose build
```

**フロントエンドの依存関係のインストール:**
```
# frontディレクトリで実行
docker-compose run front yarn install
```

**フロントエンドのサーバー起動:**
```
# frontディレクトリで実行
docker-compose up front
```

**バックエンドの依存関係のインストールとビルド:**
```
# backディレクトリで実行
docker-compose run --rm back bundle install
docker-compose build back
```

**バックエンドのデータベース作成:**
```
# backディレクトリで実行
docker-compose run --rm back rails db:create
```

**全体の起動:**
```
# yoga_zukanディレクトリで実行
docker-compose up -d
```
