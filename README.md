# learn-english-openai

```bash
aws configure sso 
export AWS_PROFILE=personal

cd ./cloudformation
aws cloudformation deploy --template-file opensearch.yaml --stack-name learn-english-open-ai --parameter-overrides file://production.json
aws cloudformation deploy --template-file opensearch-2.yaml --stack-name learn-english-open-ai 
aws cloudformation delete-stack   --stack-name learn-english-open-ai 


aws cloudformation deploy --template-file aurora-postgres.yaml --stack-name postgres-aurorora-serverless


aws cloudformation validate-template --template-body  file://aurora-postgres.yaml 
aws cloudformation update-stack --stack-name postgres-aurorora-serverless  --template-body  file://aurora-postgres.yaml 
aws cloudformation describe-stacks --stack-name postgres-aurorora-serverless
aws cloudformation delete-stack   --stack-name postgres-aurorora-serverless


aws cloudformation delete-stack   --stack-name cognito-userpool
aws cloudformation deploy --template-file cognito-userpool.yaml --stack-name cognito-userpool
aws cloudformation update-stack --stack-name cognito-userpool  --template-body  file://cognito-userpool.yaml   --parameters file://production.json

```