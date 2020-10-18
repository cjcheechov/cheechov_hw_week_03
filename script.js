// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
ps = generatePassword();
document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // Add variable and prompt for password length
  var pwLength = parseInt(prompt("Choose a password length between 8 and 128"));
      if (pwLength < 8 || pwLength > 128) {
        alert("Please enter a value between 8 and 128")
      };
  
  // Add variable for characters
  var chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz01234567890!@#$%^&*()";

  // Add variable for blank password
  var pwBlank = ""
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
