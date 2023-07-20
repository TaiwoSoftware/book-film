const closerDetails = document.querySelector('#closer');
const together = closerDetails.innerText + ' ' + localStorage.getItem('kindOfMovie') + ' films';
const submitDetails = document.querySelector('#submitDetails');
const nameOnTheCard = document.querySelector('#name');
const number = document.querySelector('#number');
const numberTwo = document.querySelector('#numberTwo');
const numberThree = document.querySelector('#numberThree');
const confirm = document.querySelector('#confirm');

closerDetails.innerText = together;
submitDetails.addEventListener('click', () => {
    if (nameOnTheCard.value !== ''
        || number.value !== ''
        || numberTwo.value !== ''
        || numberThree.value !== '') {
            confirm.setAttribute('href', 'confirmation.html');
            
        } else {
            const error = document.createElement('p');
            error.innerText = 'Empty field';
            document.body.appendChild(error);
            error.classList.add('error');
            confirm.setAttribute('href', '#');
        }
});