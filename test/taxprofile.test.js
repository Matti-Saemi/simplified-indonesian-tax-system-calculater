'use strict';

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const fs = require('fs');

const TaxProfile = require('../objects/tax-profile');

describe('Given one month salary, should calculate annual salary', () => {
  it('+ Given one month salary of IDR 3 mil Only, the annual gross salary is 36 mil', () => {
    const expectedResult = 36000000;
    const taxProfile = new TaxProfile(3000000);
    const annualGrossIncome = taxProfile.calAnnualGrossSalary();

    return assert.equal(annualGrossIncome, expectedResult);
  });

  it('- Given a negative salary, expecting an error', () => {
    return expect(TaxProfile.bind(null, -10.1)).to.throw();
  });
});

describe('Given the marital status, should return if the person is single or not', () => {
  it('+ Marital status set as single, isSingle should be true', () => {
    // const expectedResult = true;
    const taxProfile = new TaxProfile();
    taxProfile.setMaritalStatus('single');
    assert.isOk(taxProfile.isSingle())
  });

  it('- Marital status set as married, isSingle should be false', () => {
    const taxProfile = new TaxProfile(5000000, 'married');
    assert.isNotOk(taxProfile.isSingle())
  });

  it('- Marital status is not set, isSingle should throw', () => {
    const taxProfile = new TaxProfile();
    expect(taxProfile.isSingle.bind(taxProfile)).to.throw();
  });
  it('- Marital status set as a wrong value, should throw', () => {
    const taxProfile = new TaxProfile();
    expect(taxProfile.setMaritalStatus.bind(taxProfile, 'randomText')).to.throw();
  });
});

describe('Given the number of kids, should set the dependants', () => {
  it('+ Given the number of kids as 2, the dependants are 2', () => {
    const taxProfile = new TaxProfile();
    const expectedResult = 2;
    taxProfile.setNoOfKids(2);
    const noOfDependants = taxProfile.getNoOfDependants();
    assert.equal(noOfDependants, expectedResult);
  });
});
