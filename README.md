# Parcel Bootstrap
An attempt at trying to replicate the primary features of `create-react-app`
using Parcel.

TODO:
	√ Add React
	√ Add ES6 Compiler
	- React Dev Utils
	√ ESLint (config-react-app)
	- CSS Autoprefixer
	- Testing (Jest)
	√ Add SCSS parser
	- Code splitting (https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md, https://reactjs.org/docs/code-splitting.html)

## Development

	$ yarn start



NOTE: If you want to change your `.env` configuration without committing changes, simply create a new config with `.env.local` as the name and adjust your settings accordingly.

## Setup

	$ yarn install

## Local Development

	$ yarn start
	$ cat .env > .env.local
	$ 

## Production

1. Clone and

	$ git clone 
	$ nano .env.production

2. Build and serve:

	$ yarn build
	$ serve -s dist/

