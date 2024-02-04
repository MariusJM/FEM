const timesToRepeat = 20;
const character = "😡"
let answer = ""


for (let i = 0; i < timesToRepeat; i++){
    answer += character
}

console.log(`For loop Nr.1 = ${answer}`)



answer = "";
while (answer.length < timesToRepeat){
    answer += character;
}

console.log(`While Loop Nr.1 = ${answer}`)



answer = "";
let counter = 0;
while (counter < timesToRepeat){
    counter++;
    answer += character;
}

console.log(`While Loop Nr.1 = ${answer}`)


console.log("".padStart(timesToRepeat,character))