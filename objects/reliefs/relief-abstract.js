'use strict';

const TAX_RELIEFS_PLANS = require('../../plans/tax-relief-plans');

class TaxRelief {
  constructor(reliefType){
    this.plans = TAX_RELIEFS_PLANS[`${reliefType}-plans`];
  }
  getAllPlans() {}
  findPlan(profile) {}
}

module.exports = TaxRelief;
