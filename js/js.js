function changeColor(){
  colorChangeBtn.style.backgroundColor = "red"
  return
};
const colorChangeBtn = document.querySelector(".colorbtn");
colorChangeBtn.addEventListener("click",changeColor );

function hello(){
  alert("Hello, world!")
};
const helloBtn = document.querySelector(".hellobtn");
helloBtn.addEventListener("click", hello)

const password = prompt("пароль:")

const checkBtn = document.querySelector(".checkbtn");
function checking(){
  const name = document.getElementById("name").value;
const check = document.getElementById("password").value;
  
  if (check === password) {
    alert(`Вітаємо  ${name} ! Вхід авторизовано!`);
  } else {
    alert("Невірний пароль. Будь ласка, спробуйте знову.");
  }
}
checkBtn.addEventListener("click",checking);


