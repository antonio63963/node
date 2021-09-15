const categoryInput = document.querySelector('.addNewCategory'),
addCategoryBtn = document.querySelector('.addCategory'),
newCategoryURL = `/admin/addCategory`,

groupForm = document.forms.group,
categoryListSelect = document.querySelector('.categoryListSelect'),
groupInput = document.querySelector('.groupInput'),
newGroupURL = `/admin/addGroup`,

brandForm = document.forms.brand,
brandInput = document.querySelector('.brandInput'),
newBrandURL = `/admin/addBrand`

// CATEGORY
addCategoryBtn.addEventListener('click', async() => {
  const { data } = await axios.post(newCategoryURL, {name: categoryInput.value});
  categoryInput.value = '';
  console.log(data);
});
// GROUP
groupForm.addEventListener('submit', async() => {
  const dataForm = {
    category: categoryListSelect.value,
    name: groupInput.value
  }
  const { data } = await axios.post(newGroupURL, dataForm);
});
// BRAND
brandForm.addEventListener('submit', async() => {
  const { data } = await axios.post(newBrandURL, {name: brandInput.value});
  console.log(data);
});


// PRODUCT
