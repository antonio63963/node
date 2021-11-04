const sidebarUser = document.querySelector('.sidebarPanel-list');


const sidebarUserLinks = document.querySelectorAll('.sidebarPanel-list .nav-link ');
// const contentBlocks = [...document.querySelectorAll('.content-block')];



// Create new album
sidebarUser.addEventListener('click', async (e) => {
  sidebarUserLinks.forEach((link) => link.classList.remove('active'));
  e.target.classList.add('active');
  // for content
  // contentBlocks.forEach(block => block.classList.add('hidden'));
  const classBlock = e.target.dataset.block; 
  console.log(classBlock);
  // contentBlocks.find(block => block.classList.contains(classBlock)).classList.remove('hidden');
  window.location = `/userPanel/${classBlock}`
});

