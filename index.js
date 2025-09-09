let btn = document.querySelector("button");
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
// localStorage.clear()
console.log(names.value);
btn.addEventListener("click",()=>{
  localStorage.setItem("Name",names.value);
  localStorage.setItem("Email",email.value);
  localStorage.setItem("password",pass.value);
  window.open("login.html");
});