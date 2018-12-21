'use strict';
const fs = require('fs');

const TaxProfile = require('./objects/tax-profile');
const ReliefBuilder = require('./objects/reliefs/relief-builder');
const TaxCalculator = require('./tools/tax-calculator');

function readTestCasesFrom(fileDir) {
   const testCases = fs.readFileSync(fileDir, 'utf8');
   let lines = testCases.split('\n').filter(line => line !== '');
   lines.shift();
   return lines;
}


(function(){
  try {
    let fileDir = './testcases/sample.txt';
    let lines = readTestCasesFrom(fileDir);

    console.log(`Running test cases from ${fileDir}`)

    lines.map(line => {
      const [ monsthlySal, maritalStatus, noOfDependants, expectedResult ] = line.split(' ');

      const taxProfile = new TaxProfile(monsthlySal, maritalStatus, noOfDependants);
      const taxReliefPlan = ReliefBuilder.CreateRelief('dependant');
      const taxableAnnualIncome = TaxCalculator.CalculateTaxableIncomeFor(taxProfile, [taxReliefPlan]);
      const taxAmount = TaxCalculator.CalculateTaxAmountFor(taxableAnnualIncome);
      console.log(`+ Given one month salary of IDR ${monsthlySal}, marital status of ${maritalStatus} and with ${noOfDependants} dependants, tax amount is IDR ${taxAmount}`);
    });
  }
  catch(err) {
    console.error(`[Error] => ${err.message}`);
  }
})();
