**backend-config.json**に追記

> **Note**
> コメントアウトは削除

```json
"sendMailFunction": {
  "build": true,
  "providerPlugin": "awscloudformation",
  "service": "Lambda",
  // ここから
  "dependsOn": [
    {
      "category": "custom",
      "resourceName": "sns",
      "attributes": [
        "snsTopicArn"
      ]
    }
  ]
  // ここまでを追記
}
```

```sh
$ amplify env checkout dev
```

**sendMailFunction-cloudformation.template.json**に追記

> **Note**
> コメントアウトは削除

```json
"Parameters": {
    "CloudWatchRule": {
      "Type": "String",
      "Default": "NONE",
      "Description": " Schedule Expression"
    },
    "deploymentBucketName": {
      "Type": "String"
    },
    "env": {
      "Type": "String"
    }, "s3Key": {
      "Type": "String"
    },
    //ここから
    "customsnssnsTopicArn": {
      "Type": "String"
    }
    //ここまでを追記
},
```

一行になっている場合

```json
"Environment": {
    "Variables" : {"ENV":{"Ref":"env"},"REGION":{"Ref":"AWS::Region"},"SNSTOPICARN": {"Ref": "customsnssnsTopicArn"}}
},
```

**custom-policies.json**を変更

```json
[
  {
    "Resource": [{ "Ref": "customsnssnsTopicArn" }]
  }
]
```
