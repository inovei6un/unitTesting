const { expect } = require('chai')
const { isSymmetric } = require('../source/checkForSymmetry')

describe('IsSymmetric', () => {

    it('should return false if input is not an array', () =>{
        // arrange
        let input = 'Not array';
        // act
        let result = isSymmetric(input);
        // assert
        expect(result).to.be.false
    });

    it('should return true if the input is a symmetric array', () =>{
        //arange
        let input = [1, 2, 3, 4, 3, 2, 1];
        //act
        let result = isSymmetric(input);
        //assert
        expect(result).to.be.true;
    });

    it('should return false if the input array is not symmetric', () =>{
        //arrange
        let input = [1, 2, 3];
        //act
        let result = isSymmetric(input)
        //assert
        expect(result).to.be.false;
    })

});
