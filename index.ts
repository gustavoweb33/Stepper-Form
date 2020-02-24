const buttonOne = document.querySelector('.js-step-one') as HTMLButtonElement;
const fetchUserEmail = document.querySelector('#js-email')! as HTMLInputElement;

const buttonTwo = document.querySelector('.js-step-two') as HTMLButtonElement
const stepTwo = document.querySelector('.step-two') as HTMLElement;
stepTwo.style.visibility = 'hidden';
const fetchUserName = document.querySelector('#js-name') as HTMLInputElement;

const stepThree = document.querySelector('.step-three') as HTMLElement;
stepThree.style.visibility = 'hidden';


const fetchUserData = (userInput: string, button: HTMLButtonElement): void => {

    if (userInput.length !== 0) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
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
    fetchUserData(userEmail, buttonOne);
});

buttonOne?.addEventListener('click', () => {
    const stepOne = document.querySelector('.step-one-form') as HTMLElement;
    toggleVisibility(stepTwo, stepOne)
});


fetchUserName.addEventListener('input', (event) => {
    let userName = (event.target as HTMLInputElement).value;
    fetchUserData(userName, buttonTwo);
});


buttonTwo?.addEventListener('click', () => {
    toggleVisibility(stepThree, stepTwo);
});