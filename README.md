# Parcel Bootstrap
An attempt at trying to replicate the primary features of `create-react-app`
using Parcel.

TODO:
	√ Add React
	√ Add ES6 Compiler
	- Add hot reloading
	√ Add SCSS parser
	- Code splitting (https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md, https://reactjs.org/docs/code-splitting.html)

## Environmental Variables & Configuration

Create configuration files as needed, where needed. Trust me I've thought about this [alot](http://knowyourmeme.com/memes/the-alot). (Others)[https://12factor.net/config] have, too. Although, I have to agree: their reasoning doesn't necessarily convince me right off the bat.

Here are some use cases to think about:

1. Machines wanting to run the app on a port occupied by another service. A change committed to a checked-in file may eventually get checked-in causing other builds pulling changes to break.
2. Testing configurations that mimic like environments to debug problems and having these settings accidentily checked-in. (e.g. you want to replicate `production` locally so you might modify the `.env.production` to point to a new API endpoint or HTTP host)


## Development

	$ yarn start

NOTE: If you want to run the development server on a different port, simply run:
	
	$ ./node_modules/parcel-bundler/bin/cli.js -p <your_port> src/index.html

NOTE: If you want to change your `.env` configuration without committing changes, simply create a new config with `.env.local` as the name and adjust your settings accordingly.


## Production

1. Configure server by creating a `.env.production` file in root directory. See
the `.env` file for all required options.

2. Build for production:

	$ yarn build

3. Restart server!

