# Tax System

## Overview
This is the simplified Indonesian tax system calculator. It takes the monthly salary, marital status and number of kids to calculate the taxable amount and the dependant relief.

The architecture is built with consideration of
TDD, clean code, OOP design patterns, and SOLID principles. The language used is `NodeJs`, with `Mocha` and `Chai` frameworks for testing.

To use the system, you can place your acceptance test cases, in the `/testcases/sample.txt` in the space separated format, following the headers, then either run the program from `index.js` or run the automated tests using the description below.

To modify the tax rate plans go to `/plans/tax-rate-plans.js` and to modify tax relief plans go to  `/plans/tax-relief-plans.js`.

## Installation
### Run on Docker:
This will build and run the docker image which runs the program then test cases

```
docker-compose up --build
```

### Install and Run using yarn/npm
To install the packages
```
yarn install
```

To run the program
```
yarn start
```
To run the tests
```
yarn test
```
