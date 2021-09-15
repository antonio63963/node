const categoryInput = document.querySelector('.addNewCategory'),
addCategoryBtn = document.querySelector('.addCategory'),
newCategoryURL = `/admin/addCategory`,

groupForm = document.forms.group,
categoryListSelect = document.querySelector('.categoryListSelect'),
groupInput = document.querySelector('.groupInput'),
searchNameGroupInput = document.querySelector('.searchNameGroupInput'),
newGroupURL = `/admin/addGroup`,

brandForm = document.forms.brand,
brandInput = document.querySelector('.brandInput'),
newBrandURL = `/admin/addBrand`;

// CATEGORY
addCategoryBtn.addEventListener('click', async() => {
  const { data } = await axios.post(newCategoryURL, {name: categoryInput.value});
  categoryInput.value = '';
  console.log(data);
});
// GROUP
groupForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  const dataForm = {
    category: categoryListSelect.value,
    searchName: searchNameGroupInput.value,
    name: groupInput.value
  }
  const { data } = await axios.post(newGroupURL, dataForm);
});
// BRAND
brandForm.addEventListener('submit', async() => {
  const { data } = await axios.post(newBrandURL, {name: brandInput.value});
  console.log(data);
});


