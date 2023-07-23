const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
const AWSXRay = require("aws-xray-sdk"); //ここを変更
const sns = AWSXRay.captureAWSv3Client(new SNSClient());

exports.handler = async (event) => {
  const params = {
    Message: "Amplifyのテストメールです！",
    Subject: "Amplifyテスト",
    TopicArn: process.env.SNSTOPICARN,
  };

  try {
    const command = new PublishCommand(params);
    await sns.send(command);
    return "メールの送信が成功しました！";
  } catch (error) {
    console.error("メールの送信に失敗しました:", error);
    return "メールの送信に失敗しました！";
  }
};
