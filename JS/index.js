const button = document.querySelector('.form-button');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const firstNameErrorIcon = document.querySelector('.first-name-error-icon');
const firstNameErrorText = document.querySelector('.first-name-error-text');
const lastNameErrorIcon = document.querySelector('.last-name-error-icon');
const lastNameErrorText = document.querySelector('.last-name-error-text');
const emailErrorIcon = document.querySelector('.email-error-icon');
const emailErrorText = document.querySelector('.email-error-text');
const passwordErrorIcon = document.querySelector('.password-error-icon');
const passwordErrorText = document.querySelector('.password-error-text');


button.addEventListener('click', (e) => {
    e.preventDefault()    // empecher que la page se rafraichisse quand on appuie sur le bouton

    if (firstName.value == "") {
        firstNameErrorIcon.classList.remove('hidden');
        firstNameErrorText.classList.remove('hidden');
    }else{
        firstNameErrorIcon.classList.add('hidden');
        firstNameErrorText.classList.add('hidden');
    }

    if (lastName.value == "") {
        lastNameErrorIcon.classList.remove('hidden');
        lastNameErrorText.classList.remove('hidden');
    }else{
        lastNameErrorIcon.classList.add('hidden');
        lastNameErrorText.classList.add('hidden');
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;     // on stock une regex pour savoir si l'email est valide
    if(email.value.match(mailformat))
    {
        emailErrorIcon.classList.add('hidden');
        emailErrorText.classList.add('hidden');
    }
    else
    {
        emailErrorIcon.classList.remove('hidden');
        emailErrorText.classList.remove('hidden');
    }

    if (password.value == "") {
        passwordErrorIcon.classList.remove('hidden');
        passwordErrorText.classList.remove('hidden');
    }else{
        passwordErrorIcon.classList.add('hidden');
        passwordErrorText.classList.add('hidden');
    }


})
