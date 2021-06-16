const closeEl = document.querySelector('.btn-close');
console.log(window.location.pathname);
closeEl.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.pathname = '';
})