const heroBtn = document.querySelector('.aboutLoan');
const dropdownContent = document.querySelector('.dropdownContent');
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')


heroBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('hide');
});

