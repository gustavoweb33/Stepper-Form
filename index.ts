const buttonOne = document.querySelector('.js-step-one') as HTMLButtonElement;
const fetchUserEmail = document.querySelector('#js-email')! as HTMLInputElement;

const buttonTwo = document.querySelector('.js-step-two') as HTMLButtonElement
const stepTwo = document.querySelector('.step-two') as HTMLElement;
stepTwo.style.visibility = 'hidden';
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

const toggleVisibility = (nextStep: HTMLElement, previousStep: HTMLElement): void => {
    if (nextStep.style.visibility === 'hidden') {
        nextStep.style.visibility = 'visible';
    }
    else {
        nextStep.style.visibility = 'hidden';
    }

    previousStep.style.visibility = 'hidden';
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
    const stepOne = document.querySelector('.step-one-form') as HTMLElement;
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


