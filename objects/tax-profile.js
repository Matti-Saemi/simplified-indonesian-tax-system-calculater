'use strict';

const MaritalStatusTypes = ["single", "married"];

class TaxProfile {
  constructor(monthlySalary = 0, maritalStatus = '', noOfkids = 0) {
    monthlySalary = Number(monthlySalary);
    if(monthlySalary < 0) {
      throw new Error('Monthly salary should be a positive number!');
    }

    this.setMonthlySalary(monthlySalary);
    this.setMaritalStatus(maritalStatus);
    this.setNoOfKids(noOfkids);
    this.yearlySalary = this.calYearlySalary();
  }

  setMonthlySalary(salary) {
    salary = Number(salary);
    if(salary < 0) {
      throw new Error('Monthly salary should be a positive number!');
    }
    this.monthlySalary = salary;
  }

  setMaritalStatus(maritalStatus){
    if(maritalStatus === '') {
      this.maritalStatus = '';
      return;
    }
    if(MaritalStatusTypes.includes(maritalStatus)){
      this.maritalStatus = maritalStatus;
    }
    else {
      throw new Error("Wrong Marital status type!");
    }
  }

  setNoOfKids(kidsNumber){
    this.noOfDependants = Number(kidsNumber) < 0 ? 0 : Number(kidsNumber);
  }

  // Add more income attributes
  // addBonus() {}
  // addMonthlyAllowance() {}

  isSingle() {
    if(this.maritalStatus !== '') {
      return (this.maritalStatus === MaritalStatusTypes[0])
    } else {
      throw new Error("Marital status is unset!");
    }
  }

  getMaritalStatus(){
    return this.maritalStatus;
  }

  getNoOfDependants(){
    return this.noOfDependants;
  }

  calAnnualGrossSalary() {
    // Calculate the gross salary based on all the income attributes
    // in this senario we only have yearly salary
    this.annualGrossSalary = this.yearlySalary;
    return this.annualGrossSalary;
  }

  calYearlySalary() {
    const NumberOfMonths = 12;
    return this.monthlySalary * NumberOfMonths;
  }

}

module.exports = TaxProfile;
