const MODAL = document.querySelector('.pop-out');
const TOGGLE_MODAL = document.querySelectorAll('.toggle-modal');



TOGGLE_MODAL.forEach((item) => {
  item.addEventListener('click',()=>{
  MODAL.classList.toggle('modal--opened');
  })
});