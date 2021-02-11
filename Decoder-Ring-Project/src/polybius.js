const polybiusModule = (function () {
  let square = [["ERR"],
  ["ERR", "a", "f", "l", "q", "v"],
  ["ERR", "b", "g", "m", "r", "w"],
  ["ERR", "c", "h", "n", "s", "x"],
  ["ERR", "d", "(i/j)", "o", "t", "y"],
  ["ERR", "e", "k", "p", "u", "z"]];
  function letterToNumber(letter){
    let output = 00;
    for (let i = 0; i < square.length; i++){
      for (let j= 0; j < square[i].length; j++){
        if (square[i][j] === letter){
          output = i*10 + j;
        }
      }
    }
    if (letter == 'i' || letter == 'j'){
      output = 42;
    }
    return output;
  }
  function numberToLetter(number){
    let i = Math.floor(number / 10);
    let j = number - (i * 10);
    return square[i][j];
  }
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let message = input.split(" ");
    let newMessage = [];
    let flag = false;
    message.forEach((word) => {
      let newWord = [];
      let splitWord = word.split("");
      if(encode === false){
        console.log(Math.floor(splitWord.length/2));
        console.log(splitWord.length/2);
        if ((Math.floor(splitWord.length/2)) != (splitWord.length/2)){
          flag = true;
        }
        let temp = [];
        for (let i = 0; i < splitWord.length; i += 2){
          temp.push(parseInt(splitWord[i]+splitWord[i+1]));
        }
        console.log(temp);
        splitWord = temp;
      }
      splitWord.forEach((character) =>{
        if (encode === true){
          character = letterToNumber(character);
        } else {
          character = numberToLetter(character);
        }
        newWord.push(character);
      });
      newWord = newWord.join("");
      newMessage.push(newWord);
    }); 
    newMessage = newMessage.join(" ");
    if (flag === false){
      return newMessage;
    } else {
      return false;
    }

    
  }

  return {
    
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
