console.log("Hello from experiments!")
const monthlyRent = 600;
const yerlyRent = monthlyRent * 12;
console.log(yerlyRent)

console.log("Hello, World!");
console.log("Single ' inside \" \" is ok");
console.log("use backslash to escape \\ you'll be fine");
const program = "Python";
console.log(`Backticks is the same as fString in ${program}`);


const firstName = "Marius";
const lastName = "Michailovskis";
const sentence = "Hello " + firstName + " " + lastName + "! How are you?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?`;
console.log(sentence);
console.log(sentenceWithTemplate);

let isItTrue = true;
let isItFalse = false;
console.log(`Is it True? ${isItTrue}`);
console.log(isItTrue);
console.log(`Is it False? ${isItFalse}`);
console.log(isItFalse);

const isScyBlue = true;

if (isScyBlue){
    console.log("Yes")
    console.log("The sky is blue.");
} else{
    console.log("The sky is not Blue.");
}
console.log("Equality - try using tripple equals all the time")
console.log(2 + 2 == "4");
console.log(2 + 2 === "4");
console.log(2 + 2 == 4);
console.log(2 + 2 === 4);
console.log(2 + 2 == 4.0);
console.log(2 + 2 === 4.0);


console.log("--------------------------------------------------------------");

const friendAtParty = 10;
if (friendAtParty === 0){
    console.log("No friends at the party");
} else if (friendAtParty <= 4){
    console.log("LAN party");
} else {
    console.log("DISCO party");
}
// you can skip last else block

let friends = 0;
while(friends < 10){
    friends++;
    
}
console.log(`Friends at the party ${friends}`);

let animals = 0;
for (let i = 0; i < 10; i++){
    animals++;
}
console.log(`Number of animals is ${animals}`)

let partyAnimals = 0;
for (let i = 10; i > 0; i--){
    animals++;
}
console.log(`Number of party animals is ${partyAnimals}`)