import * as AmplifyHelpers from "@aws-amplify/cli-extensibility-helper";
import * as cdk from "aws-cdk-lib";
import * as sns from "aws-cdk-lib/aws-sns";
import * as subs from "aws-cdk-lib/aws-sns-subscriptions";
import type { Construct } from "constructs";

import { AmplifyDependentResourcesAttributes } from "../../types/amplify-dependent-resources-ref";

export class cdkStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: cdk.StackProps,
    amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps
  ) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, "env", {
      type: "String",
      description: "Current Amplify CLI env name",
    });
    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */

    const amplifyProjectInfo = AmplifyHelpers.getProjectInfo();

    const snsTopicResourceNamePrefix = `sns-topic-${amplifyProjectInfo.projectName}`;
    const topic = new sns.Topic(this, "sns-topic", {
      topicName: `${snsTopicResourceNamePrefix}-${cdk.Fn.ref("env")}`,
    });

    topic.addSubscription(new subs.EmailSubscription("your-email@example.com"));

    new cdk.CfnOutput(this, "snsTopicArn", {
      value: topic.topicArn,
      description: "The arn of the SNS topic",
    });
  }
}
