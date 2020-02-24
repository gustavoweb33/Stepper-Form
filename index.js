"use strict";
const buttonOne = document.querySelector('.js-step-one');
const buttonTwo = document.querySelector('.js-step-two');
const fetchUserEmail = document.querySelector('#js-email');
const stepTwo = document.querySelector('.step-two');
stepTwo.style.visibility = 'hidden';
fetchUserEmail.addEventListener('input', (event) => {
    let userEmail = event.target.value;
    if (userEmail.length !== 0) {
        buttonOne.disabled = false;
    }
    else {
        buttonOne.disabled = true;
    }
});
buttonOne === null || buttonOne === void 0 ? void 0 : buttonOne.addEventListener('click', () => {
    if (stepTwo.style.visibility === 'hidden') {
        stepTwo.style.visibility = 'visible';
    }
    else {
        stepTwo.style.visibility = 'hidden';
    }
    const stepOne = document.querySelector('.step-one-form');
    stepOne.style.visibility = 'hidden';
});
buttonTwo === null || buttonTwo === void 0 ? void 0 : buttonTwo.addEventListener('click', () => {
    const fetchUserName = document.querySelector('#js-name');
    const userName = fetchUserName.value;
    console.log(userName);
});
