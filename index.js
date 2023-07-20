const bookButton = document.querySelector('button');

window.addEventListener('load', () => {
    localStorage.clear()
})

bookButton.addEventListener('click', () => {
    localStorage.setItem('nextAfterBooking', 'bookDetails');
});