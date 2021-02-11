const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function letterToNumber(letter){
    let output = 0;
      for (let i = 0; i < 26; i++){
        if (alphabet[i] == letter){
          output = i;
        }
      }
    return output;
  }
  function numberToLetter(number){
    return alphabet[number];
  }


  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift >25){
      return false;
    }
    input = input.toLowerCase();
    if (encode == true){
      shift = shift * -1;
    }
    let message = input.split(" ");
    let newMessage = [];

    message.forEach((word) => {
      let newWord = [];
      let splitWord = word.split("");
      splitWord.forEach((character) =>{
      if (character.toLowerCase() != character.toUpperCase()){
        character = letterToNumber(character);
        character -= shift;
        if (character < 0 ){
          character = character += 26;
        }
        if (character > 25){
          character = character -= 26;
        }
        character = numberToLetter(character);
        
      }
        newWord.push(character);
      });
      newWord = newWord.join("");
      newMessage.push(newWord);
    });
    
    newMessage = newMessage.join(" ");
    return newMessage;
    
  
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
