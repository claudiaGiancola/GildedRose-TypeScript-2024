# Gilded Rose

This is the Gilded Rose kata in TypeScript.

Goals:
- Writing tests
- Refactoring
- Typescript
- Handling legacy code

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

Mocha

```sh
npm run test:mocha
```


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python


### Development

Focusing on refactoring the “Gilded Rose” code allowed me and my peer to explore in depth some aspects of the JavaScript/TypeScript syntax and to find a less know way to use both the “switch” statement and the “for loop” with multiple variables at the same time. These findings enhanced our code and improved its readability. 

General pattern:
- Read through the code a bit
- Find a section of the code that you understand
- Write a Unit Test to capture its behaviour
- Commit your code
- (optional) Refactor the code so it works the same way, but is cleaner.
- Commit your code
- Repeat

After refactoring, we added a new feature to make so that the "Conjured Mana Cake" degrades twice as fast as a normal item.
