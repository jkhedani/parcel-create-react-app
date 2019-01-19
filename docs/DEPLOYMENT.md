## Deployment

Deploy your static bundle using a Docker container:

    $ yarn build
    $ yarn docker:build
    $ yarn docker:tag
    $ yarn docker:deploy

## Deployment (AWS)

https://www.npmjs.com/package/serve

1. Create key pair in EC2 Console
2. Launch EC2 Instance and enable inbound traffic for HTTP
3. Update SSH line in package.json
4. Create ECS Registry and push Docker image up
5. SSH, install Docker:

   sudo yum update -y
   sudo yum install -y docker
   sudo usermod -a -G docker ec2-user
   (reboot ec2)
   sudo service docker start

6. Configure your EC2 instance to pull ECR images using user creds and serve:

   aws configure
   \$(aws ecr get-login --no-include-email --region us-west-2)
   docker pull 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest
   docker run -p 80:3000 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest
