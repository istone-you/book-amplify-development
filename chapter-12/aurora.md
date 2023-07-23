```sh
$ amplify add custom
```

**cdk-stack.ts**は[こちら](./src/aurora/cdk-stack.ts)

VPC 数の制限を超える場合の記載

```js
const vpc = ec2.Vpc.fromLookup(this, "Vpc", {
  vpcId: "既存のVPC ID",
});
```

<br>

```sh
$ amplify push
```

```sql
USE testdb;
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  age INT
);
```

```sql
USE testdb;
INSERT INTO User (name, age) VALUES
  ('John Doe', 25),
  ('Jane Smith', 30),
  ('Michael Johnson', 40);
```

```sql
USE testdb;
SELECT * FROM User;
```
