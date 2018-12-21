'use strict';

const TAX_RATES = require('../plans/tax-rate-plans');

class TaxRate {
  constructor() {
    this.rates = TAX_RATES;
  }

  getTaxRateFor(salaryRange) {
    return this.rates[salaryRange];
  }

  calTaxRateFor(annualSalary){
    const salaryRanges = this.getAllRanges();

    let matchedRange = null;
    for(let i = 0; i < salaryRanges.length; i++) {
      const currentRange = salaryRanges[i];
      const nextIndex = i+1;

      if(nextIndex === salaryRanges.length){
        matchedRange = i;
        break;
      }

      const nextRange = salaryRanges[nextIndex];
      if(annualSalary >= currentRange && annualSalary < nextRange) {
        matchedRange = i;
        break;
      }
    }

    if(matchedRange === null) {
      throw new Error("No matched range was found!");
    }

    return this.getTaxRateFor(salaryRanges[matchedRange]);
  }

  getAllRanges() {
    return Object.keys(this.rates).map(key => Number(key));
  }
}

module.exports = TaxRate;
