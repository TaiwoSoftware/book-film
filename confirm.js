const loadingImage = document.querySelector('img');
const code = document.querySelector('#code');
const continueButton = document.querySelector('#continue');
const submit = document.querySelector('#submit');
const verifyLink = document.querySelector('#verify');
const value = document.querySelector('#value');
const inputVerifier = document.querySelector('#input')
setInterval(() => {
    loadingImage.style.display = 'none';
}, 3000);
setTimeout(() => {
    code.innerText = 'Your Verification code is: ' + Math.floor(Math.random() * 60000)
}, 3000)
continueButton.addEventListener('click', () => {
    localStorage.setItem('verificationCode', code.innerText);
});
submit.addEventListener('click', () => {
    if(value.value !== '') {
        verifyLink.setAttribute('href', 'verifyPage.html');
    } else{
        inputVerifier.style.color = 'red';
        verifyLink.setAttribute('href', '#');
        
    }
});
