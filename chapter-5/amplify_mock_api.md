```sh
$ amplify mock api
```

「Explorer」にクエリが表示されない場合

```sh
$ npm remove @aws-amplify/cli
```

```sh
$ npm install -g @aws-amplify/cli@10.6.2
```

```sh
$ amplify mock api
```

**schema.graphql**は[こちら](./src/mock/schema.graphql)

テストが完了したら**schema.graphql**は[こちら](./src/appsync/schema.graphql)の内容に戻す。

バージョンを変更した場合元のバージョンに戻しておく

```sh
$ npm remove @aws-amplify/cli
```

```sh
$ npm install -g @aws-amplify/cli@12.1.1
```
