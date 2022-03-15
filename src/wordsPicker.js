//making fallout hack game

const wordList = ["FORK", "FORT", "BALL", "BLUE", "ROOM", "RING", "MOON", "MORE", "CLUE","SING", "SHOW", "GROW", "BARK", "PUSH", "PULL", "KING", "HALL", "BATH", "CLAM", "MAIN", "ROCK", "FISH"];

let gameWords = [];

let wordChoice = () => {
   let i = 0
    while(i < 10){
        let randomNumber = Math.floor(Math.random()*wordList.length);
        let randomWord = wordList[randomNumber];
        if (gameWords.includes(randomWord)){
            i = i
            } else {
                gameWords.push(randomWord)
                i++
            }
        }
        return gameWords

    }
export {wordList, gameWords ,wordChoice}

console.log(wordChoice(wordList))
