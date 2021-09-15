const selecCategory = document.querySelector('.selecCategory'),
  selecGroup = document.querySelector('.selecGroup'),
  selectCategoryURL = `/admin/selectCategory`,
  selectGroup = document.querySelector('.selectGroup'),
  selectGroupURL = `/admin/selectGroup`,
  addProductForm = document.querySelector('.add_productForm'),

  productForms = {
    laptop: `
<h3>Laptop</h3>
<form name="laptop">

  <h5>model:</h5>
  <div class="input-group flex-nowrap">
    <input type="text" name="model" class="form-control modelInput" placeholder="model" aria-label="model"
      aria-describedby="addon-wrapping">
  </div>
   
  <select name="isActive" class="form-select isActiveLaptop mb-3" aria-label="Default select example">
    <option value="true">в наличии</option>
    <option value="false">нет в наличии</option>
  </select>

  <select name="isSale" class="form-select isSaleLaptop mb-3" aria-label="Default select example">
    <option value="true">есть скидка</option>
    <option value="false">нет скидки</option>
  </select>

  
  <select name="brand" class="form-select selectBrand mb-3" aria-label="Default select example">
    <option selected>select the brand</option>
    
  </select>
  <select name="diagonal" class="form-select selecDiagonal mb-3" aria-label="Default select example">
    <option selected>select the diagonal</option>
    <option value="13\"">13</option>
    <option value="14\"">14</option>
    <option value="15\"">15</option>
    <option value="17\"">17</option>
  </select>

  <input name="processor" type="text" class="form-control processorInput mb-3" placeholder="Enter processor name"
  aria-label="search" aria-describedby="button-addon2">

  <input name="img" type="text" class="form-control imgInput mb-3" placeholder="Enter img link"
  aria-label="search" aria-describedby="button-addon2">

  <input name="price" type="text" class="form-control priceInput mb-3" placeholder="Enter price in cents"
  aria-label="search" aria-describedby="button-addon2">

  <input name="category" type="text" class="form-control categoryInput mb-3" placeholder="Enter category id"
  aria-label="search" aria-describedby="button-addon2">

  <h5>Description</h5>
  <textarea name="description" class="form-control laptopDescription mb-3" aria-label="With textarea"></textarea>
  <button type="submit" class="btn btn-primary submitNewLaptop"> submit </button>
`
  };


// PRODUCT
selecCategory.addEventListener('change', async (e) => {
  const {
    data
  } = await axios.post(selectCategoryURL, {
    id_category: e.target.value
  });
  let listGroups = ``;
  data.forEach(group => {
    listGroups += `<li class="list-group-item pointer" data-searchName="${group.searchName}" data-id="${group._id}">${group.name}</li>`
  });
  selectGroup.innerHTML += listGroups;
});

selectGroup.addEventListener('click', async (e) => {
  const product = e.target.dataset.searchname;
  for (let i in productForms) {
    if (i == product) {
      addProductForm.innerHTML = productForms[i];
      document.querySelector('#titleDoc').textContent = product;
      const script = document.createElement('script');
      script.src = `javascripts/admin_${product}.js`
      document.querySelector('body').appendChild(script);
      const { data } = await axios.get(`/admin/brands/${product}`);
      console.log(data);
      let brandList = '';
      data.forEach( brand => {
        brandList += `
        <option value="${brand._id}">${brand.name}</option>
        `;
      });
      document.querySelector('.selectBrand').innerHTML += brandList;
      document.querySelector('.categoryInput').value = e.target.dataset.id;
    }
  }
});