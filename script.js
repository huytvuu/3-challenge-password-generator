// Assignment code here

function askPrompts() {
  /*
    * Prompts the user for password parameters.
    * If the password length is not >= 8 and <= 125
    * Then they are reprompted
    * An empty string, `possible`, keeps track of all the wanted characters
    * If the user chooses to use a character type
    * Then the corresponding substring is appended to `possible`
    * Returns `possible`
  */

  let possible = '';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let nums = '0123456789';
  let special = '!@#$%^&*-+=?<>';  // OPT.EDIT: To use a wider variety of special characters

  globalThis.numChars = prompt("How long do you want your password to be? (8 - 125 characters)");

  while (numChars < 8 || numChars > 125) {
    numChars = prompt("Invalid password length. How long do you want your password to be? (8 - 125 characters)");
  }

  let lowerCase = confirm("Use lowercase letters in your password?? (a...z)");

  if (lowerCase) {
    possible += lower;
  }

  let upperCase = confirm("Use uppercase letters in your password? (A...Z)");

  if (upperCase) {
    possible += upper;
  }

  let numbers = confirm("Use numbers in your password? (0...9)");

  if (numbers) {
    possible += nums;
  }

  let specialChars = confirm("Use special characters in your password? (!, @, $...)");

  if (specialChars) {
    possible += special;
  }

  return possible;

}

function generatePassword() {
  /*
    * Calls the function askPrompts() to see what character types the user wants
    * An empty string, `password`, will be edited
    * Iterates through the user's chosen password length
    * Chooses a random character from `possible` to append to `password`
    * Returns `password`
  */

  let possible = askPrompts();
  let password = '';

  for (let i = 0; i < numChars; ++i) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return password;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
