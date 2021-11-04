const sidebarUser = document.querySelector('.sidebarPanel-list');
const albumForm = document.forms.album;

const sidebarUserLinks = document.querySelectorAll('.sidebarPanel-list .nav-link ');


// Create new album
sidebarUser.addEventListener('click', async (e) => {
  albumForm.classList.remove('hidden');
  sidebarUserLinks.forEach((link) => link.classList.remove('active'));
  e.target.classList.add('active');
});
