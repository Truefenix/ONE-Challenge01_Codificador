/*==================== Style Switcher ===============  */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
  styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open');
})

// ocultar switcher com o rolar da página
window.addEventListener('scroll', () => {
  if(styleSwitcher.classList.contains('open')) {
    styleSwitcher.classList.remove('open');
  }
})

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {

  alternateStyles.forEach((style) => {

    if(color === style.getAttribute('title')) {    
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  })
}