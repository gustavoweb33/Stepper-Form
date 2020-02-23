"use strict";
const buttonOne = document.querySelector('.step-one-button');
buttonOne === null || buttonOne === void 0 ? void 0 : buttonOne.addEventListener('click', (e) => {
    const userEmail = document.querySelector('#user-email');
    console.log(userEmail.value);
});
