const stepOne = document.querySelector('.js-step-one-form') as HTMLElement;
const buttonOne = document.querySelector('.js-step-one') as HTMLButtonElement;
const fetchUserEmail = document.querySelector('#js-email')! as HTMLInputElement;

const buttonTwo = document.querySelector('.js-step-two') as HTMLButtonElement
const stepTwo = document.querySelector('.step-two') as HTMLElement;
//stepTwo.style.visibility = 'hidden';
const fetchUserName = document.querySelector('#js-name') as HTMLInputElement;

const submitButton = document.querySelector('.js-submit') as HTMLButtonElement;
const stepThree = document.querySelector('.step-three') as HTMLElement;
stepThree.style.visibility = 'hidden';
const fetchUserPassword = document.querySelector('#js-password') as HTMLInputElement;

const user = {
    email: 'your@email.com',
    name: '',
}

const toggleButton = (userInput: string, button: HTMLButtonElement) => {
    if (userInput.length !== 0) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
    return true;
}

const toggleVisibility = (nextStep: HTMLElement, previousStep: HTMLElement | null): void => {

    nextStep.style.visibility = 'visible';
    // if (nextStep.style.visibility === 'hidden') {

    // }
    // else {
    //     nextStep.style.visibility = 'hidden';
    // }

    if (previousStep !== null) {
        previousStep.style.visibility = 'hidden';
    }
}


fetchUserEmail.addEventListener('input', (event) => {
    let userEmail = (event.target as HTMLInputElement).value;
    const hasInput = toggleButton(userEmail, buttonOne);

    if (hasInput) {
        user.email = userEmail;
    }

});


fetchUserName.addEventListener('input', (event) => {
    let userName = (event.target as HTMLInputElement).value;
    const hasInput = toggleButton(userName, buttonTwo);

    if (hasInput) {
        user.name = userName;
    }
});

fetchUserPassword?.addEventListener('input', (event) => {
    let userPassword = (event.target as HTMLInputElement).value;
    toggleButton(userPassword, submitButton);
});

buttonOne?.addEventListener('click', () => {
    toggleVisibility(stepTwo, stepOne)
});


buttonTwo?.addEventListener('click', () => {
    toggleVisibility(stepThree, stepTwo);
});


submitButton?.addEventListener('click', () => {
    if (user.email && user.name) {

        const diplayUser = document.querySelector('.js-user-info') as HTMLLIElement;
        const p = document.createElement('p');
        p.innerHTML = `Welcome ${user.name}. Thank you for entering your email:  ${user.email}`;
        diplayUser?.appendChild(p);
    }
    user.email = '';
    user.name = '';
});

const stepOneTitle = document.querySelector('.js-title-one') as HTMLLIElement;
stepOneTitle?.addEventListener('click', () => {
    if (stepOne.style.visibility === 'hidden') {
        toggleVisibility(stepOne, null);
    }

    stepTwo.style.visibility = 'hidden';
    stepThree.style.visibility = 'hidden';
});

const stepTwoTitle = document.querySelector('.js-title-two') as HTMLLIElement;
stepTwoTitle?.addEventListener('click', () => {
    if (stepTwo.style.visibility === 'hidden') {
        toggleVisibility(stepTwo, null);
    }

    stepOne.style.visibility = 'hidden';
    stepThree.style.visibility = 'hidden';
});

//  
