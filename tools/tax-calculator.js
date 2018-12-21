'use strict';

const TaxRate = require('../objects/tax-rate');
const ReliefBuilder = require('../objects/reliefs/relief-builder');

class TaxCalculator {

  static CalculateTaxableIncomeFor(profile, reliefs) {
    let reliefAmount = 0;
    reliefs.map(relief => {
      reliefAmount += relief.getReliefAmount(relief.findPlan(profile));
    });

    const annualGrossIncome = profile.calAnnualGrossSalary();
    return annualGrossIncome - reliefAmount;
  }

  static CalculateTaxAmountFor(annualSalary) {
    annualSalary = Number(annualSalary);
    const taxRateObj = new TaxRate();
    const allTaxRateRanges = taxRateObj.getAllRanges();
    const taxRangesSortedDesc = allTaxRateRanges.sort((a, b) => b-a);

    let taxAmount = 0;
    let newSalary = annualSalary;

    taxRangesSortedDesc.map(range => {
      let diff = newSalary - range;
      if(diff >= 0) {
        newSalary = range;
        taxAmount += diff * taxRateObj.getTaxRateFor(range);
      }
    });

    return taxAmount;
  }
}

module.exports = TaxCalculator;
