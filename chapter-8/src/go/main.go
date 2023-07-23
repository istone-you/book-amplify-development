package main

import (
	"context"
	"fmt"
	"os"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/sns"
)

func handleRequest(ctx context.Context) (string, error) {
	cfg, err := config.LoadDefaultConfig(ctx)

	client := sns.NewFromConfig(cfg)

	topicArn := os.Getenv("SNSTOPICARN")

	message := "Amplifyのテストメールです！"
	subject := "Amplifyテスト"

	params := &sns.PublishInput{
		Message:  &message,  // 送信するメッセージ内容
		Subject:  &subject,  // メールの件名
		TopicArn: &topicArn, // メッセージを送信するSNSトピックのARN
	}

	_, err = client.Publish(ctx, params)
	if err != nil {
		return "", fmt.Errorf("メールの送信に失敗しました: %w", err)
	}

	return "メールの送信が成功しました！", nil
}

func main() {
	lambda.Start(handleRequest)
}
