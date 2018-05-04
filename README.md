# Parcel Bootstrap
An attempt at trying to replicate the primary features of `create-react-app`
using Parcel.

TODO:
	√ Add React
	√ Add ES6 Compiler
	√ ESLint (config-react-app)
	√ CSS Autoprefixer
	√ Add SCSS parser
	√ Testing (Jest)
	√ Flow

## Development

	$ yarn start


NOTE: If you want to change your `.env` configuration without committing changes, simply create a new config with `.env.local` as the name and adjust your settings accordingly.

## Setup

	$ yarn install

## Local Development

	$ cat .env > .env.local
	$ nano .env.local
	$ yarn start

## Production

1. Clone and configure 

	$ git clone 
	$ cat .env > .env.production
	$ nano .env.production

2. Build and serve:

	$ yarn build
	$ serve -s dist/

