'use strict';

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const fs = require('fs');

const TaxProfile = require('../objects/tax-profile');
const ReliefBuilder = require('../objects/reliefs/relief-builder');
const TaxRelief = require('../objects/reliefs/relief-abstract');

describe('Given dependant information, find the tax relief plan', () => {
  const taxRelief = ReliefBuilder.CreateRelief('dependant');
  const taxReliefPlans = taxRelief.getAllPlans();

  it('+ Get all the tax relief depandants plans', () => {
      assert.isObject(taxReliefPlans);
  });

  it('+ Given the marital status and number of kids, find the tax relief plan', () => {
      const expectedResult = Object.keys(taxReliefPlans)[2];

      const taxProfile = new TaxProfile(6500000, 'married', 1);
      const reliefPlan = taxRelief.findPlan(taxProfile);

      assert.isString(reliefPlan);
      assert.equal(reliefPlan, expectedResult);
  });

  it('+ Given the plan type, get back the relief amount', () => {
      const planType = Object.keys(taxReliefPlans)[2];
      const expectedResult = taxReliefPlans[planType];
      const reliefAmount = taxRelief.getReliefAmount(planType);

      assert.isNumber(reliefAmount);
      assert.equal(reliefAmount, expectedResult);
  });
});
