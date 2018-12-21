'use strict';
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const fs = require('fs');

const TaxProfile = require('../objects/tax-profile');
const ReliefBuilder = require('../objects/reliefs/relief-builder');
const TaxCalculator = require('../tools/tax-calculator');

function readTestCasesFrom(fileDir) {
   const testCases = fs.readFileSync(fileDir, 'utf8');
   let lines = testCases.split('\n').filter(line => line !== '');
   lines.shift();
   return lines;
}
let fileDir = './testcases/sample.txt';

describe(`Running test cases from ${fileDir}`, () => {
  describe('Given monthly salary and person\'s data, should calculate payable tax amount', () => {
    try {
      let lines = readTestCasesFrom(fileDir);
      lines.map(line => {
        let cols = line.split(' ');
        const [ monsthlySal, maritalStatus, noOfDependants, expectedResult ] = cols;

        it(`+ Given one month salary of IDR ${monsthlySal}, marital status of ${maritalStatus} and with ${noOfDependants} dependants, tax amount should be IDR ${expectedResult}`, () => {
          const taxProfile = new TaxProfile(monsthlySal, maritalStatus, noOfDependants);
          const taxReliefPlan = ReliefBuilder.CreateRelief('dependant');
          const taxableAnnualIncome = TaxCalculator.CalculateTaxableIncomeFor(taxProfile, [taxReliefPlan]);
          const taxAmount = TaxCalculator.CalculateTaxAmountFor(taxableAnnualIncome);
          return assert.equal(taxAmount, expectedResult);
        });
      });
    } catch(err) {
      it(`[Error] => Can't run the test cases from ${fileDir}`, () => {
        assert.fail("actual", "expected", err.message);
      });
    }
  });
});
