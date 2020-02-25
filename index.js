"use strict";
const buttonOne = document.querySelector('.js-step-one');
const fetchUserEmail = document.querySelector('#js-email');
const buttonTwo = document.querySelector('.js-step-two');
const stepTwo = document.querySelector('.step-two');
stepTwo.style.visibility = 'hidden';
const fetchUserName = document.querySelector('#js-name');
const submitButton = document.querySelector('.js-submit');
const stepThree = document.querySelector('.step-three');
stepThree.style.visibility = 'hidden';
const fetchUserPassword = document.querySelector('#js-password');
const user = {
    email: 'your@email.com',
    name: '',
};
const toggleButton = (userInput, button) => {
    if (userInput.length !== 0) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
    return true;
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
    const hasInput = toggleButton(userEmail, buttonOne);
    if (hasInput) {
        user.email = userEmail;
    }
});
fetchUserName.addEventListener('input', (event) => {
    let userName = event.target.value;
    const hasInput = toggleButton(userName, buttonTwo);
    if (hasInput) {
        user.name = userName;
    }
});
fetchUserPassword === null || fetchUserPassword === void 0 ? void 0 : fetchUserPassword.addEventListener('input', (event) => {
    let userPassword = event.target.value;
    toggleButton(userPassword, submitButton);
});
buttonOne === null || buttonOne === void 0 ? void 0 : buttonOne.addEventListener('click', () => {
    const stepOne = document.querySelector('.step-one-form');
    toggleVisibility(stepTwo, stepOne);
});
buttonTwo === null || buttonTwo === void 0 ? void 0 : buttonTwo.addEventListener('click', () => {
    toggleVisibility(stepThree, stepTwo);
});
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', () => {
    if (user.email && user.name) {
        const diplayUser = document.querySelector('.js-user-info');
        const p = document.createElement('p');
        p.innerHTML = `Welcome ${user.name}. Thank you for entering your email:  ${user.email}`;
        diplayUser === null || diplayUser === void 0 ? void 0 : diplayUser.appendChild(p);
    }
    user.email = '';
    user.name = '';
});
