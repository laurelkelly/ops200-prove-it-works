const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
	let calculator = null;

	beforeEach(() => {
	calculator = new Calculator();
	});

	it('should have an add function', () => {
	expect(calculator.add).to.exist;
	});

	it('should add 2 + 2 together correctly', () => {
	expect(calculator.add(2, 2)).to.equal(4);
    });
    
    it('should have a subtract function', () => {
    expect(calculator.subtract).to.exist;
    });

    it('should subtract 2 - 2 correctly', () => {
    expect(calculator.subtract(2, 2)).to.equal(0);
    });

    it('should have a multiply function', () => {
    expect(calculator.multiply).to.exist;
    });

    it('should multiply 2 * 2 correctly', () => {
    expect(calculator.multiply(2, 2)).to.equal(4);
    });

    it('should have a divide function', () => {
    expect(calculator.divide).to.exist;
    });

    it('should divide 4 / 2 correctly', () => {
    expect(calculator.divide(4, 2)).to.equal(2);
    });
});

//Write a subtract, multiply and divide function in Calculator.js in a similar fashion to add, following the Red/Green/Refactor process to write your tests (Write a failing test, then a passing test, then refactor, then repeat).