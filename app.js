// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
let Kalvian1 = "Raghav";

// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is",Kalvian1);

// 1.3 Create a variable `Kalvian-2` with the navigator's name.
let Kalvian2="Natasha";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is",Kalvian2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(Kalvian1.length==Kalvian2.length){
  console.log("Wow, you both have equally long names," ,Kalvian2.length ,"characters!")
}
else if(Kalvian1.length>Kalvian2.length){
  console.log("The driver has the longest name, it has" ,Kalvian1.length ,"characters.")

}
else{
  console.log("It seems that the navigator has the longest name, it has " ,Kalvian2.length ," characters.")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

let word = 'Kalvian';
let hasVowels = false;

for (let i = 0; i < word.length; i++) {
  let currentChar = word[i].toLowerCase();

  if ('aeiou'.includes(currentChar)) {
    hasVowels = true;
    console.log( currentChar, i);
  }
}

if (hasVowels) {
  console.log(`word with vowels: ${word}`);
} else {
  console.log('No vowels');
}


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let upperCase = 0;
let lowerCase = 0;

  for (let i = 0; i < Kalvian1.length; i++) {
    const char = Kalvian1[i];
    if (char >= 'A' && char <= 'Z') {
      upperCase++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCase++;
    }
  }

  console.log(`Uppercase characters in kalvian1: `,upperCase);
  console.log(`Lowercase characters in kalvian1: ` ,lowerCase);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let driverName = 'kalvian';
let drivername2 = '';

for (let i = 0; i < driverName.length; i++) {
  drivername2 += driverName[i].toUpperCase();

  if (i < driverName.length - 1) {
    drivername2 += ' ';
  }
}

console.log(drivername2);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
let name = 'Kalvian';
let KalvianRev = '';

for (let i = name.length-1; i>=0; i--) {
  KalvianRev += name[i];
}

console.log(KalvianRev);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
console.log(Kalvian1+" "+Kalvian2);

// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
console.log(Kalvian2+" "+Kalvian1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (Kalvian1 < Kalvian2) {
  console.log("The driver's name goes first.");
} else if (Kalvian1 > Kalvian2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
