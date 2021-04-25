'use strict';

// Variables

const loginForm = document.querySelector('#welcome-form'), 
  messagesSection = document.querySelector('#messages-section'), 
  messagesList = document.querySelector('#messages-list'), 
  addMessageForm = document.querySelector('#add-messages-form'), 
  userNameInput = document.querySelector('#username'), 
  messageContentInput = document.querySelector('#message-content'); 

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

function sendMessage(event) {
  event.preventDefault();
  if (messageContentInput.value) {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = '';
  } else {
    window.alert('Please, type your message first');
  }
};

function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message', 'message--received');
  if (author === userName) message.classList.add('message--self');
  
  // prepare author element
  const authorElem = document.createElement('h3');
  authorElem.classList.add('message__author');
  authorElem.innerText = author === userName ? 'You' : author;
  message.appendChild(authorElem);

  //prepare content element
  const contentElem = document.createElement('div');
  contentElem.classList.add('message__content');
  contentElem.innerText = content;
  message.appendChild(contentElem);
  
  messagesList.appendChild(message);
};

// Listners
loginForm.addEventListener('submit', event => login(event));
addMessageForm.addEventListener('submit', event => sendMessage(event));