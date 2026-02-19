
const menuBtn = document.querySelector('#menuBtn');
const navList = document.querySelector('#navList');

menuBtn.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
  localStorage.setItem('menuOpen', isOpen);
});
