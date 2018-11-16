# Parcel Create React App
@author Justin Hedani

## Development
	
	$ cp .env.sample .env
	$ yarn
	$ yarn start

## Environmental Variables

The `create-react-app` script/package can't deal with simple things like making the changing of environmental variables and deployment locations easy so: 
	
	a) Modify .env.local for local env adjustments
	b) edit the package the JSON when building for staging or production
	c) Use a Parcel bootstrap for first

## Deployment (AWS)
https://www.npmjs.com/package/serve

1. Create key pair in EC2 Console
2. Launch EC2 Instance
3. Update SSH line in package.json
4. Create ECS Registry and push Docker image up
5. SSH, install Docker:

	sudo yum update -y
	sudo yum install -y docker
	sudo usermod -a -G docker ec2-user
	(reboot ec2)
	sudo service docker start

6. Pull docker image and serve:

	docker pull 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest