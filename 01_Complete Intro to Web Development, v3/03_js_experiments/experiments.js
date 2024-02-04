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

// F(x) = x + 2

function addTwo(number){
    return number + 2;
}
const finalAnswer = addTwo(5);
console.log(`addTwo function with variable 5 answer = ${finalAnswer}`)

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
  }
  
  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
  console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

const myHomeCity = "Seattle";
const myHomeState = "Washington";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);


function bark() {
    console.log("woof");
  }
  
const meow = function () {
    console.log("meeeeeeeow");
  };
  
  // the => is just = > put together, the font just combines them to one glyph
let chirp = () => {
    console.log("chirp chirp");
  };
  
  bark();
  meow();
  chirp();