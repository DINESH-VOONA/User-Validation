let btn = document.querySelector("button");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
btn.addEventListener("click",()=>{
  if(email.value === localStorage.getItem("Email") && pass.value === localStorage.getItem("password") ){
    window.open("welcome.html");
  }
  else if(email.value !== localStorage.getItem("Email")){
    window.alert("Email Invalid");
  }
  else if(pass.value !== localStorage.getItem("password")){
    window.alert("Incorrect Password");
  }
})