**sendMailFunction-cloudformation-template.json**に追記

> **Note**
> コメントアウトは削除

```json
"Resources": {
    "LambdaFunction": {
      "Type": "AWS::Lambda::Function",
      "Metadata": {
        "aws:asset:path": "./src",
        "aws:asset:property": "Code"
      },
      "Properties": {
        // ここから
        "TracingConfig": {
          "Mode": "Active"
        },
        // ここまで
        ・
        ・
        ・
```

**custom-policies.json**を変更

```json
[
  {
    "Action": ["sns:Publish"],
    "Resource": [{ "Ref": "customsnssnsTopicArn" }]
  },
  {
    "Action": ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
    "Resource": ["*"]
  }
]
```

```sh
$ amplify push
```

```sh
$ npm install aws-xray-sdk --prefix
~/environment/amplifyapp/amplify/backend/function/sendMailFunction/src/
```

**index.js**は[こちら](./src/trace/index.js)

```sh
$ amplify push
```

```sh
$ git add .
```

```sh
$ git commit -m "トレース監視の追加"
```

```sh
$ git push origin dev
```
