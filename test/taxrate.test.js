'use strict';
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const TaxProfile = require('../objects/tax-profile');
const TaxRate = require('../objects/tax-rate');

describe('Given one month salary, should calculate tax rate', () => {
  it('+ Given one month salary of IDR 50 mil, tax rate is 30%', () => {
    const expectedResult = 0.30;
    const taxProfile = new TaxProfile(50000000);
    const annualGrossIncome = taxProfile.calAnnualGrossSalary();
    const taxRateObj = new TaxRate();
    const taxRate = taxRateObj.calTaxRateFor(annualGrossIncome);
    return assert.equal(taxRate, expectedResult);
  });

  it('+ Given one month salary of IDR 2 mil, tax rate is 5%', () => {
    const expectedResult = 0.05;
    const taxProfile = new TaxProfile(2000000);
    const annualGrossIncome = taxProfile.calAnnualGrossSalary();
    const taxRateObj = new TaxRate();
    const taxRate = taxRateObj.calTaxRateFor(annualGrossIncome);
    return assert.equal(taxRate, expectedResult);
  });

  it('- Given annual salary as a nagative number, should throw', () => {
    const taxRateObj = new TaxRate();
    expect(taxRateObj.calTaxRateFor.bind(taxRateObj,-1)).to.throw
  });
});
