# screeps

## Summary

Just another [screeps](https://screeps.com) project. Written in TypeScript, with task running using Grunt.

## Usage

This project leverages the [grunt-screeps](https://github.com/screeps/grunt-screeps) plugin for committing code to a specified screeps account.

To get started:

```text
npm install
```

Create a `.screeps.json` file in the project root directory and provide the screeps account credentials:

```text
{
  "email": "<email>",
  "password": "<password>",
  "branch": "default",
  "ptr": false
}
```

To compile:

```text
grunt run
```

To compile and commit code to the screeps account:

```text
grunt upload
```

Once committed, screeps will begin running the new code.

## Resources

- [Game Docs](https://docs.screeps.com/)
- [API Docs](https://docs.screeps.com/api/)