# screeps

## Summary

[Screeps](https://screeps.com) is an open-source "MMO sandbox game for programmers".

The core mechanic involves programming your units' AI and competing against other players for scarce resources.

Written in [TypeScript](https://www.typescriptlang.org/), using [Grunt](https://gruntjs.com/) and [ESLint](https://eslint.org/).

## Usage

To get started:

```text
npm install
```

This project leverages the [grunt-screeps](https://github.com/screeps/grunt-screeps) plugin for committing code to a specified screeps account.

Create a `.screeps.json` file in the project root directory and provide the screeps account credentials:

```text
{
  "email": "<email>",
  "password": "<password>",
  "branch": "default",
  "ptr": false
}
```

To lint and compile:

```text
grunt build
```

To lint, compile, and commit code to the specified screeps account:

```text
grunt deploy
```

Once committed, screeps will begin running the new code.

## Linting

This project is linted using [`eslint`](https://eslint.org/) with the [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) plugin.

Linting rules can be adjusted in the `.eslintrc.yaml` file.

## Resources

* [Game Docs](https://docs.screeps.com/)
* [API Docs](https://docs.screeps.com/api/)
