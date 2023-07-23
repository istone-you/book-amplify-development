import * as cdk from "aws-cdk-lib";
import * as apprunner from "aws-cdk-lib/aws-apprunner";
import * as iam from "aws-cdk-lib/aws-iam";
import type { Construct } from "constructs";

export class cdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.CfnParameter(this, "env", {
      type: "String",
      description: "Current Amplify CLI env name",
    });

    new cdk.CfnParameter(this, "customecrrepositoryUri", {
      type: "String",
    });

    const repositoryUri = cdk.Fn.ref("customecrrepositoryUri");

    const accessRole = new iam.Role(this, "AccessRole", {
      assumedBy: new iam.ServicePrincipal("build.apprunner.amazonaws.com"),
      description: "For App Runner Access Role",
    });

    const ecrPolicy = new iam.PolicyStatement({
      actions: [
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:DescribeImages",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
      ],
      resources: ["*"],
    });

    accessRole.attachInlinePolicy(
      new iam.Policy(this, "accessRolePolicy", {
        statements: [ecrPolicy],
      })
    );

    new apprunner.CfnService(this, "AppRunnerApp", {
      sourceConfiguration: {
        authenticationConfiguration: {
          accessRoleArn: accessRole.roleArn,
        },
        autoDeploymentsEnabled: true,
        imageRepository: {
          imageIdentifier: `${repositoryUri}:latest`,
          imageRepositoryType: "ECR",

          imageConfiguration: {
            port: "3000",
          },
        },
      },
      networkConfiguration: {
        ingressConfiguration: {
          isPubliclyAccessible: true,
        },
      },
      serviceName: `AppRunnerApp-${cdk.Fn.ref("env")}`,
    });
  }
}
