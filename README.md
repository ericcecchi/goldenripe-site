
# React Site Boilerplate

We <3 React.

## Dev Quick Start

```zsh
npm i
gulp dev
```

This will run an instance of webpack-dev-server on port 1984 serving the contents of `build/dev`. Changes to JavaScript and CSS are automatically injected into the browser via Hot Module Replacement.

Options:

- `--port=3030` to change the dev server port.
- `--env=test` to build into `build/test`.


## Building for Prod

```zsh
npm i
gulp build --env=prod
node server.js --env=prod --port=9001
```

The gulp task will build into `build/prod` and create a `server.js` file in the root directory for node to run. We're pointing the node server to `build/prod` with `--env=prod`.


## Deploying

Coming soon.
