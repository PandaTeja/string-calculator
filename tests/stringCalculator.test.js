const { add } = require('../src/StringCalculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).toEqual(0);
    });

    it('should return the number when a single number is passed', () => {
        expect(add("1")).toEqual(1);
    });

    it('should return the sum of two numbers', () => {
        expect(add("1,2")).toEqual(3);
    });

    it('should return the sum of multiple numbers', () => {
        expect(add("1,2,3")).toEqual(6);
    });

    it('should handle new lines between numbers', () => {
            expect(add("1\n2,3")).toEqual(6);
    });

    it('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toEqual(3);
    });

    it('should throw an exception for negative numbers', () => {
        expect(() => add("1,-2,3,-4")).toThrowError('negative numbers not allowed: -2,-4');
    });
});
