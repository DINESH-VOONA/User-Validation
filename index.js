let btn = document.querySelector("button");
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
btn.addEventListener("click",(e)=>{
  e.preventDefault();
  localStorage.setItem("Name",names.value);
  localStorage.setItem("Email",email.value);
  localStorage.setItem("password",pass.value);
  if(names.value!="" && email.value!="" && pass.value!=""){
    if(pass.value.length>=8){
      window.open("login.html");
    }
    else{
      window.alert("Password should hava 8 characters");
    }
  }
});

let icon = document.querySelector("i");
icon.addEventListener("mousedown",()=>{
  pass.type = "text";
})
icon.addEventListener("mouseup",()=>{
  pass.type = "password";
})