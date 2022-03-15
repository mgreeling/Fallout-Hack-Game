// make the field for the game

const randomChars = ["!","@","(","}","*","?","$"]
let mapField = []

let charArray = () => {
    let i = 0;
    while(i < 160){
    
        let randomNumber = Math.floor(Math.random()*randomChars.length);
        let randomChar = randomChars[randomNumber];
        mapField.push(randomChar);
        i++
        
        }
    return mapField

}

export {randomChars, mapField, charArray};
console.log(charArray(randomChars));
