const { expect } = require("chai");
const polybius = require("../src/polybius");
describe(("polybius()"), () =>{
    it(("Scramble a single word"), ()=> {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it(("Should scramble multiple words"), ()=> {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it(("Unscramble a single word"), ()=> {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(("Unscramble a word using the (i/j) substitution"), ()=> {
        const input = "4432423352125413";
        const encode = false;
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(("Return flase if the unscramble is an uneven amount"), ()=> {
        const input = "44324233521254134";
        const expected = false;
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
});