# learning-nx

Learning NX and GitHub Actions for +1/Curiosity Week (Q1 - FY25). This week will run from 02/10/24 to 07/10/24.

## Setting up a monorepo Angular project

Following the NX commands [here](https://nx.dev/nx-api/nx/documents/create-nx-workspace).

I used this command to create the project:

```sh
yarn global add nx@latest
```

```sh
yarn create nx-workspace angular-monorepo --preset=angular-monorepo --e2eTestRunner=playwright --name=learning-nx --nxCloud=skip --skipGit=true --ssr=true --useGitHub=true --packageManager=yarn
```

Plus used the following interactive options:

```
 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

√ Application name · angular-monorepo
√ Which bundler would you like to use? · esbuild
√ Default stylesheet format · scss
```

## Listing NX commands

To display them, run:

```sh
yarn run nx list @nx/angular
```

## Create new items with NX

### New application

In the previous section, the list command will display the [generators](https://nx.dev/nx-api/nx/documents/generate).
For creating a new application, for example:

```sh
yarn run nx g @nx/angular:app inventory --directory=apps/inventory --ssr=true --dry-run
```

Plus used the following interactive options:

```
 NX  Generating @nx/angular:application

√ Which bundler do you want to use to build the application? · esbuild
√ What should be the project name and where should it be generated? · inventory @ apps/inventory
```

### New library

In order to share and reuse items, NX allows us to create standalone libraries:

```sh
yarn run nx g @nx/angular:library products --directory=libs/products --standalone --dry-run
```

It's important to note they will be located in `libs/` and the way that the Angular monorepo will interact with it is by being defined in: `angular-monorepo\tsconfig.base.json`.  
The individual library components can be served via router in `angular-monorepo\apps\angular-monorepo\src\app\app.routes.ts`.  
You can also use the Angular selector, e.g.: `angular-monorepo\apps\inventory\src\app\app.component.ts`.

## Testing the monorepo

To run the unit tests:

```sh
yarn run nx test angular-monorepo
```

To run the e2e tests:

```sh
yarn run nx e2e angular-monorepo-e2e
```

Note that this abstracts which e2e runner it is, but I still had to install Playwright separately with:

```sh
yarn playwright install
```

### Running only the affected projects

For running tests only for the new changes since the last commit:

```sh
yarn run nx affected -t test
```

And to display the changes:

```sh
yarn run nx graph --affected
```

### Running multiple tasks in parallel

You can run all the tests and lint, for example:

```sh
yarn run nx run-many -t test lint e2e
```

For deploying the entire monorepo in production mode:

```sh
yarn run nx run-many -t build
```

## Resetting NX

Sometimes NX will not run and you will need to reset it with:

```sh
yarn run nx reset
```

If you know where the problem is, you can use the specific [flag](https://nx.dev/nx-api/nx/documents/reset) for it.

## NX architecture

### NX Dependency graph

NX allows us to visualize the dependencies between apps and libraries via:

```sh
yarn run nx graph
```

### NX tasks

NX allows us to [visualize](https://nx.dev/nx-api/nx/documents/show) the tasks, instead of reading them directly from the configuration files with:

```sh
yarn run nx show project angular-monorepo-e2e --web
```

## CI workflow with GitHub

It creates a base file with:

```sh
nx generate ci-workflow --ci=github
```

## Storybook

Using the NX plugin for [storybook](https://storybook.js.org/).

```sh
yarn run nx add @nx/storybook@19.8.3
```

### Adding storybook stories into an existing component

```sh
yarn run nx g @nx/angular:storybook-configuration angular-monorepo
```

```sh
NX  Generating @nx/angular:storybook-configuration

√ Do you want to set up Storybook interaction tests? (Y/n) · true
√ Automatically generate *.stories.ts files for components declared in this project? (Y/n) · true
√ Configure a static file server for the storybook instance? (Y/n) · true
```
### Adding storybook stories into an existing project

```sh
yarn run nx g @nx/angular:stories --project=shared-ui
```

```sh
 NX  Generating @nx/angular:stories

√ Do you want to set up Storybook interaction tests? (Y/n) · false

CREATE libs/shared/ui/src/lib/shared-ui/shared-ui.component.stories.ts
```

### Using compodoc with storybook to write embedded documentations

First add the package to a project with storybook with
```sh

yarn add -D @compodoc/compodoc
```
Then follow the configuration steps in [here](https://nx.dev/recipes/storybook/angular-storybook-compodoc).
