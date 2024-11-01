const passwordBox = document.getElementById("password");
const totalLength = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSym = "!@#$%^&*()_-=+{}][~|";

const allChar = upperCase + lowerCase + number + specialSym;

function createPass() {
  let password = "";
  //   password += upperCase[Math.floor(Math.random() * upperCase.length)];
  //   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  //   password += number[Math.floor(Math.random() * number.length)];
  //   password += specialSym[Math.floor(Math.random() * specialSym.length)];

  while (totalLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

function copy() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
  alert("Copied Password");
}
