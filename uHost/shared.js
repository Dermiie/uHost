var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var ModalActionNegative = document.querySelector('.modal__action--negative');
var ToggleButton = document.querySelector('.toggle-button');
var MobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
} 
if(ModalActionNegative) {
    ModalActionNegative.addEventListener('click', function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });
}  

{
    backdrop.addEventListener('click', function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
        MobileNav.style.display = 'none';
    });
}
{
    MobileNav.addEventListener('click', function() {
        MobileNav.style.display = 'none';
    });
}
{
    ToggleButton.addEventListener('click', function() {
            MobileNav.style.display = 'block';
        });
}




 