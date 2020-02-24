"use strict";
const buttonOne = document.querySelector('.js-step-one');
const fetchUserEmail = document.querySelector('#js-email');
const buttonTwo = document.querySelector('.js-step-two');
const stepTwo = document.querySelector('.step-two');
stepTwo.style.visibility = 'hidden';
const fetchUserName = document.querySelector('#js-name');
const stepThree = document.querySelector('.step-three');
stepThree.style.visibility = 'hidden';
const fetchUserData = (userInput, button) => {
    if (userInput.length !== 0) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
};
const toggleVisibility = (nextStep, previousStep) => {
    if (nextStep.style.visibility === 'hidden') {
        nextStep.style.visibility = 'visible';
    }
    else {
        nextStep.style.visibility = 'hidden';
    }
    previousStep.style.visibility = 'hidden';
};
fetchUserEmail.addEventListener('input', (event) => {
    let userEmail = event.target.value;
    fetchUserData(userEmail, buttonOne);
});
buttonOne === null || buttonOne === void 0 ? void 0 : buttonOne.addEventListener('click', () => {
    const stepOne = document.querySelector('.step-one-form');
    toggleVisibility(stepTwo, stepOne);
});
fetchUserName.addEventListener('input', (event) => {
    let userName = event.target.value;
    fetchUserData(userName, buttonTwo);
});
buttonTwo === null || buttonTwo === void 0 ? void 0 : buttonTwo.addEventListener('click', () => {
    toggleVisibility(stepThree, stepTwo);
});
