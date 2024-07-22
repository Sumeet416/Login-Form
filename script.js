const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const Confirm = document.getElementById('Confirm');

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    Confirm.style.display = "block";
}

signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
    Confirm.style.display = "none";
}