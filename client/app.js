'use strict';

const loginForm = document.querySelector('#welcome-form'), // referencja do formularza logowania.
  messagesSection = document.querySelector('#messages-section'), //referencja do sekcji z wiadomościami.
  messagesList = document.querySelector('#messages-list'), //referencja do samej listy wiadomości.
  addMessageForm = document.querySelector('#add-messages-form'), //referencja do formularza dodawania wiadomości.
  userNameInput = document.querySelector('#username'), //referencja do pola tekstowego z formularza logowania.
  messageContentInput = document.querySelector('#message-content'); //referencja do pola tekstowego z formularza do wysyłania

let userName;

function login(event) {
  event.preventDefault();
  if(userNameInput.value) {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  } else {
    window.alert('Please, fill in your username');
  }
};

loginForm.addEventListener('submit', event => login(event));