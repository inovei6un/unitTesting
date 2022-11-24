const { expect } = require('chai')
const { createCalculator } = require('../source/add-subtract')

describe('Calculator func', () => {

    it('should return 0 for get', () => {
        calc = createCalculator()

        expect(calc.get()).to.be.equal(0)
    });

    it('should return 5 if we use add(2) and add(3)', ()=> {
        calc = createCalculator()
        calc.add(2)
        calc.add(3)
        result = calc.get()

        expect(result).to.be.equal(5)
    });

    it('should return -5 if we use subtract(2) and subtract(3)', ()=> {
        calc = createCalculator()
        calc.subtract(2)
        calc.subtract(3)
        result = calc.get()

        expect(result).to.be.equal(-5)
    });

    it('should return NaN if we add with other type', () => {
        calc = createCalculator()
        calc.add('s')
        expect(calc.get()).to.be.NaN
    });

    it('should return NaN if we subtract with other type', () => {
        calc = createCalculator()
        calc.subtract('s')
        expect(calc.get()).to.be.NaN
    });

    it('should parse as number if string of a number for subtract', () => {
        calc = createCalculator()
        calc.subtract('5')
        expect(calc.get()).to.be.equal(-5)
    });

    it('should parse as number if string of a number for add', () => {
        calc = createCalculator()
        calc.add('5')
        expect(calc.get()).to.be.equal(5)
    });
});