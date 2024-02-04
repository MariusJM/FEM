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

  // SCOPE

function addFive(number) {
    const someVariable = "you can't see me outside this function";
    console.log(someVariable);
    return number + 5;
}
  
  addFive(10);
  // out of scope
  // console.log(someVariable); //ReferenceError: someVariable is not defined

let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
// out of scope - outside of {}
// console.log(i); //ReferenceError: i is not defined

// examples to explore
`
const A = "A";
let F;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D);
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E);
console.log(G);

doStuff("B");
console.log(B);
console.log(C);
console.log(F);

const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope
`

// Builtins

const sentence2 = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence2 = sentence2.toLowerCase();
const upperCaseSentence2 = sentence2.toUpperCase();
let sentence3 = "ThIs HaS wEiRd CaSiNg On It".toLowerCase;
let sentence4 = "ThIs HaS wEiRd CaSiNg On It".toUpperCase;
console.log(lowerCaseSentence2);
console.log(upperCaseSentence2);
console.log(sentence3);
console.log(sentence4);


// want to round a number? use Math!
const number = 5.3;
const roundedNumber = Math.round(number);
//round - to the nearest int
//floor - always round down
//ceil - always rounds up
//math.random()
console.log(number);
console.log(roundedNumber);



// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
      "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const testStringThree = "execute";
      const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));
console.log(testStringThree.includes(stringToLookFor));



let string = "hi my name is Marius"
console.log(string.substring(0))
console.log(string.substring(1))
console.log(string.substring(3, 5))
console.log(string.substring(3, 14))
console.log(string.substring(14))
// https://developer.mozilla.org/en-US/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());
