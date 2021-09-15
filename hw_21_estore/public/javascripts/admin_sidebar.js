const navList = document.querySelector('.nav-list'),
  categoryBlock = document.querySelector('.category_wrap'),
  groupBlock = document.querySelector('.group_wrap'),
  brandBlock = document.querySelector('.brand_wrap'),
  productBlock = document.querySelector('.add_product')


let showBlock = null;
navList.addEventListener('click', (e) => {
  const typeField = e.target.dataset.type;
  console.log(typeField);
  switch (typeField) {
    case 'category': 
      if(showBlock) showBlock.classList.add('d-none');
      categoryBlock.classList.remove('d-none');
      showBlock = categoryBlock;
      break;
    case 'group': 
      if(showBlock) showBlock.classList.add('d-none');
      groupBlock.classList.remove('d-none');
      showBlock = groupBlock;
      break;
    case 'brand': 
      if(showBlock) showBlock.classList.add('d-none');
      brandBlock.classList.remove('d-none');
      showBlock = brandBlock;
      break;
    case 'addProduct': 
      if(showBlock) showBlock.classList.add('d-none');
      productBlock.classList.remove('d-none');
      showBlock = productBlock;
      break;
  }
})