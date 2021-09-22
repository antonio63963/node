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
newBrandURL = `/admin/addBrand`,
brandCategory = document.querySelector('.brand-category'),
groupBrand = document.querySelector('.brand-group'),
selectedGroupId = document.querySelector('.brand-groupId'),
brandsGroupURL = `/admin/groupBrands`,
clearGroupId = document.querySelector('.clearGroupId');

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
brandForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  const formData = {
    name: brandInput.value,
    group: selectedGroupId.value.split(',').slice(0, -1),
  };
  console.log(formData);
  const { data } = await axios.post(newBrandURL, formData);
  console.log(data);
});

brandCategory.addEventListener('click', async(e) => {
  if(!e.target.classList.contains('list-group-item')) return false;
  const { category } = e.target.dataset;
  const { data } = await axios.post('admin/selectCategory', {id_category: category});
  const html = data.reduce((acc, group) => {
    acc += `
    <li class="list-group-item pointer" data-group="${group._id}">${group.name}</li>
    `;
    return acc;
  }, '');

  groupBrand.innerHTML = html;
  groupBrand.addEventListener('click', async (e) => {
    if(!e.target.classList.contains('list-group-item')) return false;
    const group_id = e.target.dataset.group;
    selectedGroupId.value += `${group_id},`;
    const { data } = await axios.post(brandsGroupURL, {id: group_id});
    console.log(data); 
  });
});

clearGroupId.addEventListener('click', () => {
  selectedGroupId.value = '';
});



