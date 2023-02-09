const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");


function logInSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Have a nice day! ${username}`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", logInSubmit);

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    loginForm.classList.remove("hidden")
} else {
    greeting.classList.remove("hidden");
    greeting.innerText = `Have a nice day! ${savedUsername}`;
}