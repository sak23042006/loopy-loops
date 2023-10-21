// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var driverName = 'Sarvesh';

console.log(`The driver' name is ${driverName}`);

var navigatorName = 'Nivaash';

console.log(`The navigator's name is ${navigatorName}`);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (driverName.length > navigatorName.length) {
  console.log(
    `The driver has the longest name, it has ${driverName.length} characters.`
  );
} else if (navigatorName.length > driverName.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorName.length} characters!.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverName.length} characters!.`
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
indexString = '';
vowelString = '';
for (let i = 0; i < driverName.length; i++) {
  if (['a', 'e', 'i', 'o', 'u'].includes(driverName[i].toLowerCase())) {
    indexString += i + ' ';
    vowelString += driverName[i] + ' ';
  }
}

console.log(vowelString + indexString);

// 2.3. Check if the string contains uppercase and lowercase characters
// - Print the number of upper case characters
// - Print the number of lower case characters
Lc = 0;
Uc = 0;
for (let i = 0; i < driverName.length; i++) {
  if (driverName[i].toLowerCase() == driverName[i]) {
    Lc += 1;
  } else if (driverName[i].toUpperCase() == driverName[i]) {
    Uc += 1;
  }
}

console.log(`No of Uppercase letters ${Uc}`);
console.log(`No of Lowercase letters ${Lc}`);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var result = '';
for (let i = 0; i < driverName.length; i++) {
  result += driverName[i].toUpperCase() + ' ';
}

console.log(result.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

var result1 = '';
for (let i = navigatorName.length - 1; i >= 0; i--) {
  result1 += navigatorName[i];
}

console.log(result1.trim());

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"

var mergedNames = driverName + ' ' + navigatorName;
console.log('Merged Names: ' + mergedNames);

// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

var switchedNames = navigatorName + ' ' + driverName;
console.log('Switched Names: ' + switchedNames);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (driverName > navigatorName) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
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
