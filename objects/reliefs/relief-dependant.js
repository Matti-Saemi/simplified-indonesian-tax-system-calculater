'use strict';

const TaxRelief = require('./relief-abstract');

class ReliefDependant extends TaxRelief {
  constructor(){
    super('dependant');
    this.planTypes = Object.keys(this.plans);
  }

  getAllPlans() {
    return this.plans;
  }

  findPlan(profile) {
    const maritalStatus = profile.getMaritalStatus()
    const noOfDependants = profile.getNoOfDependants();
    
    if(maritalStatus == '' || !maritalStatus){
      throw new Error('The marital status is empty!');
    }

    const planTypes = this.planTypes;
    if(maritalStatus === 'single') {
      return planTypes[0];
    } else if(maritalStatus === 'married') {
      let key = '';
      switch (noOfDependants) {
        case 0 :
          key = planTypes[1];
          break;
        case 1 :
          key = planTypes[2];
          break;
        case 2 :
          key = planTypes[3];
          break;
        case 3 :
        default:
          key = planTypes[4];
      }
      return key;
    } else {
      throw new Error('Wrong marital status');
    }
  }

  getReliefAmount(planType){
    return Number(this.plans[planType]);
  }
}

module.exports = ReliefDependant;
