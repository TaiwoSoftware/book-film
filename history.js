const kindOfMovie = document.querySelector('#kindOfMovie');
const title = document.querySelector('#title');
const date = document.querySelector('#date');
const watchingWith = document.querySelector('#watchingWith');
const verificationCode = document.querySelector('#verificationCode');

kindOfMovie.innerText = localStorage.getItem('kindOfMovie');
title.innerText = localStorage.getItem('typeOfMovie');
date.innerText = localStorage.getItem('date');
watchingWith.innerText = localStorage.getItem('watchingWith');
verificationCode.innerText = localStorage.getItem('verificationCode');
