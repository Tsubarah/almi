const heroBtn = document.querySelector('.aboutLoan');
const dropdownContent = document.querySelector('.dropdownContent');
const applyBtn = document.querySelectorAll('.applyBtn');
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')


heroBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('hide');
});




applyBtn.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})