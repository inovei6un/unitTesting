const { expect } = require('chai')
const { isOddOrEven } = require('../source/evenOrOdd')

describe('Is it even or odd', () => {

    it('should return undefined if other than string type is given', () =>{
        // arrange
        let input = 5;
        // act
        let result = isOddOrEven(input);
        // assert
        expect(result).to.be.undefined
    });

    it('should return even if the length of the string is even', () =>{
        // arrange
        let input = 'even';
        // act
        let result = isOddOrEven(input);
        // assert
        expect(result).to.be.equal('even')
    });

    it('should return even if the length of the string is even test 2', () =>{
        // arrange
        let input = 'bamboo';
        // act
        let result = isOddOrEven(input);
        // assert
        expect(result).to.be.equal('even')
    });


    it('should return odd if the length of the string is odd', () =>{
        // arrange
        let input = 'odd';
        // act
        let result = isOddOrEven(input);
        // assert
        expect(result).to.be.equal('odd')
    });

    it('should return odd if the length of the string is odd test 2', () =>{
        // arrange
        let input = 'haralampi';
        // act
        let result = isOddOrEven(input);
        // assert
        expect(result).to.be.equal('odd')
    });
});