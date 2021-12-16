const heroBtn = document.querySelectorAll('.aboutLoan');
const dropdownContent = document.querySelector('.dropdownContent');
const readMoreBtn = document.querySelector('.readMore');
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

heroBtn.forEach(link => {
    link.addEventListener('click', () => {
        dropdownContent.classList.toggle('hide');
    });
})

readMoreBtn.addEventListener('click', () => {
    window.open();
})

