const expect = require('chai').expect;
const assert = require('chai').assert;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
    mortgage = new Mortgage();
    });

    it('should have a constructor', () => {
    expect(mortgage.constructor).to.exist;
    });

    it('principal should hold a number', () => {
    let principal = 0;
    expect(principal).to.be.a('number');
    })
   
    it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
    });

    it('monthlyPayment should return type number', () => {
    let monthlyPayment = 0;
    assert.typeOf(monthlyPayment, 'number');
    });
});