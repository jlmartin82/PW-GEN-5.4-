// Add event listener to generate button
// Assignment Code
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCase = []
var lowerCase = []
var specialCharacters = []

var generateBtn = document.querySelector("#generate");
var basket = []

function generatePassword(){
    var length = prompt("enter length of at least 8 characters and no more than 128 characters")
    console.log(length)
    

    var isNumber = confirm("Do you want numbers in your password")
    if (isNumber === true) {
        basket.concat(numbers)
      }




    var isUpperCase = confirm("Do you want uppercase in your password")
    if (isUpperCase === true) {
      basket.concat(upperCase)
    }



    var isLowerCase = confirm("Do you want lowercase in your password")
    if (isLowerCase === true) {
      basket.concat(lowerCase)
    }

    var isSpecialCharacters = confirm("Do you want special characters in your password")
    if (isSpecialCharacters === true) {
      basket.concat(specialCharacters)
    }












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