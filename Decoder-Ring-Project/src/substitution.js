const substitutionModule = (function () {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function codeIt(letter, alphabet){
    let output="";
    for (let i = 0; i < alpha.length; i++){
      if (alpha[i] == letter){
        output = alphabet[i];
      }
    }
  return output;
  }

  function decode(letter,alphabet){
    let output="";
    for (let i = 0; i < alphabet.length; i++){
      if (alphabet[i] == letter){
        output = alpha[i];
      }
    }
  return output;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet){
      return false;
    }
    alphabet = alphabet.slice("");

    if (alphabet.length < 26){
      return false;
    }
    for (let i = 0; i < alphabet.length; i++){
      for (let j = 0; j < alphabet.length; j++){
        
        if (alphabet[i] === alphabet[j] && i != j){
          return false;
        }
      }
    }
    let output = [];
    //make input lower case
    input = input.toLowerCase();
    //split up input by word
    let sentence = input.split(" ");
    console.log(sentence);
    sentence.forEach((word) =>{
      let letters = word.split("");
      let outputword = [];
      letters.forEach((character) =>{
        if (encode === true){
          outputword.push(codeIt(character, alphabet));
        } else {
          outputword.push(decode(character, alphabet));
        }
      });
      outputword = outputword.join("");
      output.push(outputword);
    });
    output = output.join(" ");
 
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
