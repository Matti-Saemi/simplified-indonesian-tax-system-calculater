'use strict';
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const TaxProfile = require('../objects/tax-profile');
const ReliefBuilder = require('../objects/reliefs/relief-builder');
const TaxCalculator = require('../tools/tax-calculator');

describe('Given person\'s marital status and number of dependants, calculate annual income', () => {
  it('+ With salary of monthly IDR 6.5 mil, married with one kid, the annual taxable income is IDR 15 mil ', () => {
    const expectedResult = 15000000;
    const taxProfile = new TaxProfile(6500000, 'married', 1);
    const taxReliefPlan = ReliefBuilder.CreateRelief('dependant');
    const taxableAnnualIncome = TaxCalculator.CalculateTaxableIncomeFor(taxProfile, [taxReliefPlan]);
    assert.equal(taxableAnnualIncome, expectedResult);
  });
  it('+ With salary of monthly IDR 25 mil, single, the annual taxable income is IDR 246 mil ', () => {
    const expectedResult = 246000000;
    const taxProfile = new TaxProfile(25000000, 'single');
    const taxReliefPlan = ReliefBuilder.CreateRelief('dependant');
    const taxableAnnualIncome = TaxCalculator.CalculateTaxableIncomeFor(taxProfile, [taxReliefPlan]);
    const taxAmount = TaxCalculator.CalculateTaxAmountFor(taxableAnnualIncome);
    assert.equal(taxableAnnualIncome, expectedResult);
  });
});

describe('Given salary and person\'s data, should calculate payable tax amount', () => {
  it('+ Given one month salary of IDR 4 mil, tax amount is IDR 2.4 mil', () => {
    const expectedResult = 2400000;
    const taxProfile = new TaxProfile(4000000);
    const annualGrossIncome = taxProfile.calAnnualGrossSalary();
    const taxAmount = TaxCalculator.CalculateTaxAmountFor(annualGrossIncome);
    return assert.equal(taxAmount, expectedResult);
  });

  it('+ Given one month salary of IDR 22 mil, payble tax is IDR 36 mil', () => {
    const expectedResult = 36000000;
    const taxProfile = new TaxProfile(22000000);
    const annualGrossIncome = taxProfile.calAnnualGrossSalary();
    const taxAmount = TaxCalculator.CalculateTaxAmountFor(annualGrossIncome);
    return assert.equal(taxAmount, expectedResult);
  });
});
