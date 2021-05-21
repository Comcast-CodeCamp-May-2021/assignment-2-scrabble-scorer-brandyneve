// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word= "";
//let algorithmSelection = "";
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
//console.log(oldScrabbleScorer(initialPrompt(word)));
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   
   word = input.question("Let's play some scrabble! Enter a word to score: ");
   //console.log(oldScrabbleScorer(word))
   return word
  
};

//let simpleScore
function simpleScore(word){
  let totalPointsSS = word.length
  return totalPointsSS;

} //K.i.s.s if each letter is 1 point, total points = word.length
                                                    
//let vowelBonusScore;//get word  length then add 2 for each vowel located, going to need to create an array for vowels, and then a for loop to check if there is a vowel at any index in the provided word
function vowelBonusScore(word){
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let vowelPoints=0
  
  for (let i =0; i<word.length; i++){
    
    if (vowels.includes(word[i])){
        vowelPoints = vowelPoints +3

        }else{
          vowelPoints= vowelPoints +1
    }
     
  //let totalVowelBonusScore = simpleScore(word) + vowelPoints//tried that with vowel points +2 and no else statement, couldn't make it behave, so it is probably something to do with calling the other function and failing

  }  
return vowelPoints;
}
//let scrabbleScore
function scrabbleScore(someWord){
  someWord = someWord.toUpperCase();
  let scrabbleScorePoints = 0
 
  for (let i = 0; i < someWord.length; i++){//need to search for the value and return the key at each iteration of i in someWord
      for (const letter in newPointStructure){
        let points= [letter];
        if (letter.includes(someWord[i]) ){
          scrabbleScorePoints += Number(newPointStructure[letter])//whatever the dang value is at the key that was found when it went through the index of someWord
          }
        
      }

  }
  return scrabbleScorePoints
};//add the points for each letter to reach total*/

let simpleScoreSystem ={
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore//"A function with a parameter for user input that returns a score."
}
let vowelBonusScoreSystem ={
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore//"A function that returns a score based on the number of vowels and consonants."
}
let scrabbleScoreSystem ={
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}
const scoringAlgorithms = [simpleScoreSystem, vowelBonusScoreSystem, scrabbleScoreSystem];

function scorerPrompt() {  
  let algorithmSelection = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: "); 
  
  
  if (algorithmSelection === "0") {
    console.log(`Score for "${word}" is: ${simpleScore(word)}`);
    
    }else if
      (algorithmSelection === "1"){
        console.log(`Score for "${word}" is: ${vowelBonusScore(word)}`);
         //score using vowelBonusScore
      }else
        {
          console.log(`Score for "${word}" is: ${scrabbleScore(word)}`)
          //score using scrabbleScore      
        } 
  return algorithmSelection    
}
/*function scorerPrompt() {  
  let algorithmSelection = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: "); 
  
  if (algorithmSelection === 0) {
    console.log(`Score for "${word}" is: ${simpleScore(word)}`);
    //score using simpleScore and return scored word in the format of ("score for "help" using simple score is: 4" )
    }else if{
      (algorithSelection === 1){
        console.log(`Score for "${word}" is: ${vowelBonusScore(word)}`);
         //score using vowelBonusScore
      }else{
        (algorithSelection ===2){
          console.log(`Score for "${word}" is: ${scrabbleScore(word)}`)
          //score using scrabbleScore      
        } 
    }
}
}*/
function transform(list){
  let letterList = {};
  for(let value in list){
    let letters= list[value];
    for (let i =0;i<letters.length; i++){
      letterList[letters[i]] = value;
    }

  }
  return letterList;
}



let newPointStructure = transform(oldPointStructure);

function runProgram() {
   console.clear();
   word = initialPrompt();
   scorerPrompt();
   //simpleScore(word);
   //vowelBonusScore(word);
   //scrabbleScore(word);
   //console.log(`Simple Score is ${simpleScore(word)}`);
   //console.log(`Vowel Bonus Score is ${vowelBonusScore(word)}`);
   //console.log(`scrabble score is ${scrabbleScore(word)}`);
   //console.log(`Selected algorithm is ${scorerPrompt()}`);
   //console.log(transform(oldPointStructure));
   //console.log(newPointStructure);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

