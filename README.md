# Parcel Create React App
@author Justin Hedani

## Development
	
	$ cp .env.sample .env
	$ yarn
	$ yarn start

## Deployment
https://www.npmjs.com/package/serve

	$ yarn build --no-source-maps
	$ serve -sp 3000 dist/`

## Styling
NOTE: We are using (SASS/SCSS)[https://sass-lang.com/guide]
1. Create or edit an `.scss` file in `src/lib/styles`.
2. Styles will auto-compile when you run the local server but if you want to only compile SASS, simply run:
	
	$ yarn build-css

## Environmental Variables

The `create-react-app` script/package can't deal with simple things like making the changing of environmental
variables and deployment locations easy so: 
	
	a) Modify .env.local for local env adjustments
	b) edit the package the JSON when building for staging or production
	c) Use a Parcel bootstrap for first