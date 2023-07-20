const films = document.querySelectorAll('#films');
const headerTwo = document.querySelectorAll('h2');
const col = document.querySelectorAll('.col')
const titleOfMovie = document.querySelector('#titleOfMovie');
col.forEach(img => {
    img.addEventListener('click', () => {
        if (img.appendChild  === 'Fast x') {
            console.log("Fast x")
        }
    })
});