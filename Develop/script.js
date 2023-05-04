// Add event listener to generate button
// Assignment Code
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCase = []
var lowerCase = []
var specialCharacters = []

var generateBtn = document.querySelector("#generate");
function generatePasswordprompts() 
{
    var length = prompt("enter length of at least 8 characters and no more than 128 characters")
   console.log(length)
}
function generatePassword(){
    var prompts = generatePasswordprompts();
}
// Write password to the #password input
function writePassword() {
  console.log("password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)