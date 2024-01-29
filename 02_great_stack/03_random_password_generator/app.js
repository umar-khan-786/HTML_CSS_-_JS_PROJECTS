const input = document.querySelector("input");
const button = document.querySelector("button");
const copyBtn = document.querySelector(".display img");

function generatePassword() {
  //   const str =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%_-&";
  const passwordLength = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "@#$%_-&*^!{[/}]";
  const allChars = upperCase + lowercase + numbers + symbols;

  let password = "";
  password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  //   for (let i = 0; i < 12; i++) {
  //     password += str.charAt(Math.floor(Math.random() * str.length));
  //   }

  while (passwordLength > password.length) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  input.value = password;
}

function copyPassword() {
  input.select();
  document.execCommand("copy");
}

copyBtn.addEventListener("click", copyPassword);
button.addEventListener("click", generatePassword);
