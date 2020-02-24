const buttonOne = document.querySelector('.js-step-one') as HTMLButtonElement;
const buttonTwo = document.querySelector('.js-step-two') as HTMLButtonElement
const fetchUserEmail = document.querySelector('#js-email')! as HTMLInputElement;
const stepTwo = document.querySelector('.step-two') as HTMLElement;
stepTwo.style.visibility = 'hidden';

fetchUserEmail.addEventListener('input', (event) => {
    let userEmail = (event.target as HTMLInputElement).value;

    if (userEmail.length !== 0) {
        buttonOne.disabled = false;
    }
    else {
        buttonOne.disabled = true;
    }

});

buttonOne?.addEventListener('click', () => {
    if (stepTwo.style.visibility === 'hidden') {
        stepTwo.style.visibility = 'visible';
    }
    else {
        stepTwo.style.visibility = 'hidden';
    }

    const stepOne = document.querySelector('.step-one-form') as HTMLElement;
    stepOne.style.visibility = 'hidden';
});

buttonTwo?.addEventListener('click', () => {

    const fetchUserName = document.querySelector('#js-name')! as HTMLInputElement;
    const userName = fetchUserName.value;
    console.log(userName)
});