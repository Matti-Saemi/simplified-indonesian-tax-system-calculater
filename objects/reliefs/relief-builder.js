'use strict';

const DepandantRelief = require('./relief-dependant');
// const SportRelief = require('./relief-sport');
// const BookRelief = require('./relief-book');

class ReliefBuilder {
  static CreateRelief(reliefType) {
    switch (reliefType) {
      case 'dependant':
        return new DepandantRelief();
        break;
      case 'sport':
        break;
      case 'book':
        break;
      case 'electronic':
        break;
    }
  }
}

module.exports = ReliefBuilder;
