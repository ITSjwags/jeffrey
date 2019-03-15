# Jeffrey Huysentruyt Portfolio
A [Gatsby v2](https://www.gatsbyjs.org/) powered website based on [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default/).

It follows the [JAMstack architecture](https://jamstack.org) with [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prototype
[Jeffrey Website Link](https://jeffrey.com/)

## Features
* Styled Components for styling
* Linting for all JS and CSS

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Deployment
All the files are on GitHub and hosted using Netlify with it's CDN and CI so everything committed to master automatically gets deployed live.
