const { expect } = require("chai");
const caesar = require("../src/caesar");

describe(("caesar()"), () =>{
    it(("Should return a single word, scrambled"), ()=> {
        const input = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("Should return a single word, scrambled opposite direction"), ()=> {
        const input = "thinkful";
        const shift = -3;
        const expected = "qefkhcri";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("Should unscramble a single word"), ()=> {
        const input = "wklqnixo";
        const shift = 3;
        const expected = "thinkful";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it(("Can scramble multiple word inputs"), ()=> {
        const input = "This is a secret message";
        const shift = 8;
        const expected = "bpqa qa i amkzmb umaaiom";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("Can unscramble multiple word inputs"), ()=> {
        const input = "bpqa qa I amkzmb umaaiom";
        const shift = 8;
        const expected = "this is a secret message";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it(("Return false if no shift is given"), ()=> {
        const input = "thinkful";
        const expected = false;
        const actual = caesar(input);
        expect(actual).to.equal(expected);
    });
    it(("Return false if shift is too large"), ()=> {
        const input = "thinkful";
        const expected = false;
        const shift = 99;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it(("Return false if shift is too small"), ()=> {
        const input = "thinkful";
        const expected = false;
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
});