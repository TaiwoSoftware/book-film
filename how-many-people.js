
const buttons = document.querySelectorAll('#watch');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.innerText === 'Watch alone' 
        || this.innerText === 'With my Spouse👬' 
        || this.innerText === 'my Family and Friends👨‍👩‍👧‍👦'
        || this.innerText === 'Hangout👩‍❤️‍👩') {
            localStorage.setItem('watchingWith', this.innerText);
        }
        else(
            alert('please pick from the list provided')
        )
    });
});

