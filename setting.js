const date = document.querySelector('#date');
const time = document.querySelector('#time');
const continueForm = document.querySelector('#continue');

continueForm.addEventListener('click', () => {
    if (date.value === '' || time.value === '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Please add a date and a time convenient for you';localStorage.setItem('date', 'The date convenient for you is ' + date.value);
        document.body.appendChild(errorMessage);
        errorMessage.style.color = 'red';
        errorMessage.style.fontStyle = 'italic';
        document.querySelector('#movement').setAttribute('href', '#');
        
    } else {
        document.querySelector('#movement').setAttribute('href', 'choose-your-type.html');
    }
    localStorage.setItem('date', `This is the date convenient for you ${date.value} and the time that is convenient for you is ${time.value}` )
})
