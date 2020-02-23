const buttonOne = document.querySelector('.step-one-button');

buttonOne?.addEventListener('click', (e) => {
    const userEmail= document.querySelector('#user-email')! as HTMLInputElement;
    console.log(userEmail.value)
});

