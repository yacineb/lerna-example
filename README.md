# lerna-example

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Illustrating the monorepo concept using [lerna](https://github.com/lerna/lerna). 

This tool has great benefits:

- Can manage recursive internal dependencies. Same logic for both internal and external dependencies, it's completely transparent.

- Ability to hoist common dependencies in 'master' lerna repo, this reduces complexity and build time.

- Run an npm command in a bulk [lenra run](https://github.com/lerna/lerna/tree/master/commands/run#readme) on all subrepos or a filtered list (--scope flag) , can be parallelized (--parallel flag). See also [lerna exec](https://github.com/lerna/lerna/tree/master/commands/exec#readme). 
>This is great when dealing with microservices when needing to bring them all up or when needing to run tests for all of them.

- [lerna import](https://github.com/lerna/lerna/tree/master/commands/import#readme) enables the import of an external git repository into the monorepo packages.

- Sophisticated npm package publishing based on many CI/CD scenarios  using `lerna publish` and `lerna version` commands.


## setup of a lerna monorepo from scratch

``` console
$ #first you have to install npx command runner gloablly (may need root user)
$ npm install -g npx

#install lerna as a dev dependency
$ npm init
$ npm i lerna --save-dev

$ #init monorepo config , this will create packages folder and lerna.json config
$ npx lerna init --independent
```

> --independant flag means that each subrepo has its own npm versionning, there is also --exact mode : all of the subrepos follow the same versionning.

- You can customize lerna.json: yarn or npm as a package manager, projects tree, refine package publishing policy etc..

- Create your subrepo projects under _packages_ folder. Each project under its own folder a it was a repository by itself.

## Developer commands

> It's preferrable to run commands from project root (where lerna.json resides)

- `npx lerna bootstrap` : The first command to launch. Must be ran when a subrepo is added/removed or after a fresh git clone. it links subrepos and does some magic..

- `npx lerna publish` : publish to npm. Each time you publish, you will get a prompt for each package that has changed to specify if it's a patch, minor, major or custom change.

- `npx lerna add <your local or remote package>` : installs a package to all of the subrepos. when adding --scope=project-a for exemple this restricts to the given subrepo. Further [doc](https://github.com/lerna/lerna/tree/master/commands/add#readme)

- `npx lerna create <subrepo name>` : adds a new subrepo.

**Examples**

- install lodash for project-a : `npx lerna add lodash --scope=project-a`

- install project-a as a dep for project-b : `npx lerna add project-a --scope=project-b`

The dependency schema in this sample monorepo is the following:

project-c -> | project-a
             | project-b -> project-a
            
 
