# screeps-typescript-starter

## About Screeps

[Screeps](https://screeps.com) is an open-source "MMO sandbox game for programmers". The core mechanic involves programming your units' AI and competing against other players for scarce resources.

The running game can be viewed from a web browser or inside the stand-alone Steam client. The game client supports coding directly, but this can be a challenging environment in which to code and maintain more than a few simple scripts.

## Project Summary

The `screeps-typescript-starter` repository provides everything you need to quickly get a Screeps project off the ground in Typescript.

This starter template is setup for [TypeScript](https://www.typescriptlang.org/) (but will also work well with JavaScript files), and uses [Grunt](https://gruntjs.com/) and [ESLint](https://eslint.org/) to lint and build. The built code is deployed to the specified Screeps account using the [grunt-screeps](https://github.com/screeps/grunt-screeps) plugin.

## Usage

### Initial Setup

1. [Create](https://screeps.com/a/#!/register) a Screeps account.
2. Clone a copy of this repository and run `npm install` in the project root directory.
3. Create a `.screeps.json` file in the project root directory and provide your screeps account credentials.

```text
{
  "email": "<email>",
  "password": "<password>",
  "branch": "default",
  "ptr": false
}
```

### Add Creep AI

The `main.ts` `loop` method is ready to begin adding your own Creep AI. Two starter methods are included to write game ticks to the console log, and to clean up dead Creeps from memory.

### Build

The `build` command will lint and compile all `src/**/*.ts` files.

```text
grunt build
```

### Deploy

The `deploy` command will lint, compile, and deploy all built `dist/*.js` files to the specified screeps account.

```text
grunt deploy
```

Once committed, the targeted screeps account will begin running the new code right away.

## Linting Rules

This project is linted using [`ESLint`](https://eslint.org/) with the [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) plugin.

Linting rules can be adjusted in the `.eslintrc.yaml` file.

## Additional Resources

* [Game Docs](https://docs.screeps.com/)
* [API Docs](https://docs.screeps.com/api/)
* [screeps/tutorial-scripts](https://github.com/screeps/tutorial-scripts)
* [screeps/screeps](https://github.com/screeps/screeps)