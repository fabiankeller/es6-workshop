#ES6-Workshop

##Welcome
Welcome to this ES6 workshop. Our goal is to help everyone make strides towards learning the newest ES6 syntax, and
how to use the latest constructs in JavaScript.

This repo is meant to be used in parallel with a lecture style presentation of the new features.

##Your Goals
This repo is full of failing tests. The only way to get them to pass it by using your newly acquired knowledge of ES6
and all of the new features that are part of this latest release. For each test, you will need to write/rewrite to code
using the latest ES6 syntax. Once all of your tests pass, you will want to move onto the next section.

By the time that the workshop is over, all of your tests will be passing.

##How To Get Started

###Clone the repo
You will need to start by cloning this repo. From your terminal, type:
```
git clone https://github.com/fabiankeller/es6-workshop.git && cd es6-workshop
```

###Install Dependencies
Once you have cloned the repo, in need to install the local dependencies. From your terminal, type:
```
npm install
```

*Note that this step will install `Babel` globally. This project uses Babel to provide support for ES6 syntax. Without
it, we wouldn't be able to use many of these features.*

#How To Run Tests
Once you have everything installed, you are ready to run some tests. There are two directories with tests in them: `spec` and `spec-final`.
The `spec-final` directory is like a cheat sheet. All of the tests contain the required ES6 code to make the tests pass. You will need to
edit the tests in the `spec` directory, and make the tests pass.

To run the tests, in your terminal run:

```javascript
npm test
```

This will execute the tests in the `spec` directory. Currently all of these tests are disabled, because I have changed the `it()` statement
to `xit()`, which will skip that test. Your jobs it to one-by-one turn each test back on and get the test to pass, by
writing the required ES6 code. Once you have written the required code, the tests will pass, and you can move onto the next test.

------
