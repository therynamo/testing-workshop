# Getting Started

Clone the repository and make sure that all the dependencies are downloaded.

```
yarn install
```

### Run the tests!

This is a testing workshop after all!

```shell
# Unit and integration
yarn jest

# Functional
yarn start
## Open new terminal tab
yarn test:functional
``` 

### Start up the dev server.

Make sure everything compiles as expected, and you should see our program running on [http://localhost:3000](http://localhost:300) (unless of course something else is occupying that port). 

Play around with the todos, get a feel for what we're going to be testing. 

```
yarn start
```

# Slides

https://slides.com/therynamo/testing

# Unit Tests

We're going to look at `./src/actions/transforms/todosTransform.js` and we're going to do some TDD to get this running.

### Library Docs
[Jest](https://jestjs.io/docs/en/getting-started)

# Integration Tests

We'll take a look at:

```
./src/components/TodoDetails
./src/components/TodoList
```

And we'll talk about what we can do to confidently test our code.

### Library Docs

[react-testing-library](https://testing-library.com/docs/)
[Nock](https://github.com/nock/nock#usage)

# Functional test

Here we'll take a look at `./functional-tests/` and write a couple that will test the _critical paths_ of our application.

### Library Docs

[jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)
[Puppeteer](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)