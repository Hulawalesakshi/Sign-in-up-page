//Form Toggler...

let SignUpLink = document.querySelector('.signup-link');
let SignInLink = document.querySelector('.signin-link');
let SignUpBox = document.querySelector('.sign-up-box');
let SignInBox = document.querySelector('.sign-in-box');

SignUpLink.addEventListener('click',()=>{
    SignUpBox.classList.add('form-active');
    SignInBox.classList.remove('form-active');
})

SignInLink.addEventListener('click',()=>{
    SignUpBox.classList.remove('form-active');
    SignInBox.classList.add('form-active');
});

//Form Close and Open

let SigninButton = document.querySelector('.signin-button');
let FormWrapper = document.querySelector('.Form-Wrapper');
let FormCloser = document.querySelector('.form-closer');

SigninButton.addEventListener('click',()=>{
    FormWrapper.style.transform ='scale(1) translate(-50%, -50%)'
});

FormCloser.addEventListener('click', ()=>{
    FormWrapper.style.transform ='scale(0) translate(-50%, -50%)'
})

//Menu Toggle...
let MenuButton = document.querySelector('.menu');
let NavLinks = document.querySelector('.nav-links');

MenuButton.addEventListener('click',()=>{
    NavLinks.classList.toggle('nav-links-active');
})