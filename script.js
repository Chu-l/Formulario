//VARIABLES GLOBALES
const formulario = document.querySelector('#formulario');
let inputFullname = document.querySelector('#fullname');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let inputRepeatPassword = document.querySelector('#repeatPassword');
let inputCheck = document.querySelector('#checkId');
let btnSubmit = document.querySelector('#submit');

let fullname, email, pass, repeatPass;

const getData = () => {
    fullname = inputFullname.value;
    email = inputEmail.value;
    pass = inputPassword.value;
    repeatPass = inputRepeatPassword.value;
    formulario.reset() 
}

const validatePassword = () => {
    const success = document.querySelector('#password-success');
    const alert = document.querySelector('#password-alert');
    if (inputPassword.value===inputRepeatPassword.value) {
        success.classList.remove('d-none');
        alert.classList.add('d-none');
        btnSubmit.removeAttribute('disabled','disabled');
        return true
    }
    else {
        alert.classList.remove('d-none');
        success.classList.add('d-none');
        btnSubmit.setAttribute('disabled','disabled');
        return false
    }
}

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    if (validatePassword()) {
       getData();
    }
    else {
       alert('Tus datos son incorrectos');
    }
});

inputRepeatPassword.onchange = validatePassword;