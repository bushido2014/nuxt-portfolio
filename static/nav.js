"use strict";

const navBar = document.querySelector('.main-navigation')
const navBtn = document.querySelector('.nav-btn')
//
navBtn.addEventListener('click', () => {
  this.classList.toggle('open')
  navBar.classList.toggle('nav--open')
});