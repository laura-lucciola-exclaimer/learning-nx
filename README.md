# learning-nx

Learning NX and Github Actions for +1/Curiosity Week (Q1 - FY25) . This week will run 02/10/24 - 07/10/24

## Setting up a monorepo Angular project

Following the NX commands [here](https://nx.dev/nx-api/nx/documents/create-nx-workspace)

I used this command to create the project:

```
yarn global add nx@latest
```

```
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

To display them run

```
yarn run nx list @nx/angular
```

## Create new items with NX

### New application

In the previous section, the list command will display the [generators](https://nx.dev/nx-api/nx/documents/generate).
For creating a new application, for example:

```
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

```
yarn run nx g @nx/angular:library products --directory=libs/products --standalone --dry-run
```

It's important to notice they will be located in `libs/` and the way that the angular monorepo will interact with it is by being defined in: `angular-monorepo\tsconfig.base.json`.  
The individual library components can be served via router in `angular-monorepo\apps\angular-monorepo\src\app\app.routes.ts`.  
You can also use the Angular selector, e.g.: `angular-monorepo\apps\inventory\src\app\app.component.ts`.

## Resetting NX

Sometimes NX will not run and you will need to reset its cache with

```
yarn run nx reset
```

## NX Dependency graph

NX allow us to visualize the dependencies between apps and libraries via:

```
yarn run nx graph
```
