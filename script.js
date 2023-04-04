const btn = document.getElementById("btn");
const number = document.getElementById("number");
const showpassword = document.getElementsByClassName("showpassword");
const copy = document.getElementById("copy");

function generatePassword(length) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-={}[]|;:"<>,.?/';

  const allChars = uppercase + lowercase + numbers + symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

btn.addEventListener("click", function(e){
  e.preventDefault();
  const password = generatePassword(parseInt((number.value)));
  const p = document.createElement("p");

  if(parseInt(number.value) > 40){
    alert("the maximum length of password characters  = 40");
    p.textContent = "";
  } else {
    p.textContent = password;
    showpassword[0].appendChild(p);
    showpassword[0].style.display = "flex";
    copy.addEventListener("click", function(e) {
      e.preventDefault();
      const password = generatePassword(parseInt((number.value)));
      p.textContent = password;
      alert("the password has been copied in your clipboard");
    });
  }
});

number.addEventListener("change", function() {
  showpassword[0].innerHTML = "";
  showpassword[0].style.display = "none";
});