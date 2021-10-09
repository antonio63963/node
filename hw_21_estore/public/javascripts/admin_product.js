const selecCategory = document.querySelector('.selecCategory'),
  selecGroup = document.querySelector('.selecGroup'),
  selectCategoryURL = `/admin/selectCategory`,
  selectGroup = document.querySelector('.selectGroup'),
  selectGroupURL = `/admin/selectGroup`,
  addProductForm = document.querySelector('.add_productForm'),

  productForms = {
    laptop: `
<h3>New product</h3>
<form name="general">

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

  <input name="group" type="text" class="form-control groupInput mb-3" placeholder="Enter group id"
  aria-label="search" aria-describedby="button-addon2" value="6141f0649443fc4bb8506a57">

  <h5>Description</h5>
  <textarea name="description" class="form-control laptopDescription mb-3" aria-label="With textarea"></textarea>

  <div class="inputPhotoContainer">
    <div class="inputPhoto-1">
      <p>
      <span>Загрузить фото</span> #
      <span class="PhotoAmaunt"> 1</span>
      </p>
      <div class="input-group d-flex flex-nowrap mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" name="uploaded_file">
        <button class="btn btn-outline-secondary addOneElse" data-num="1">+ one else</button>
      </div>
    </div>
  </div>
  <input name="price" type="text" class="form-control priceInput mb-3" placeholder="Enter price in cents"
  aria-label="search" aria-describedby="button-addon2">
</form>

<h2>Laptop</h2>
<form name="features">
  <select name="diagonal" class="form-select selecDiagonal mb-3" aria-label="Default select example">
    <option selected>select the diagonal</option>
    <option value="13"">13</option>
    <option value="14"">14</option>
    <option value="15"">15</option>
    <option value="17"">17</option>
  </select>

  <select name="processor_series" class="form-select selecDiagonal mb-3" aria-label="Default select example">
    <option selected>select the diagonal</option>
    <option value="Intel i3">Intel i3</option>
    <option value="Intel i5">Intel i5</option>
    <option value="Intel i7">Intel i7</option>
    <option value="Intel i9">Intel i9</option>
  </select>
  <input name="processor" type="text" class="form-control imgInput mb-3" placeholder="model processor"
  aria-label="search" aria-describedby="button-addon2">
  <button type="submit" class="btn btn-primary submitNewLaptop"> submit </button>
</form>
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
    listGroups += `<li class="list-group-item pointer" data-searchName="${group.type}" data-id="${group._id}">${group.name}</li>`
  });
  selectGroup.innerHTML += listGroups;
});

selectGroup.addEventListener('click', async (e) => {
  const product = e.target.dataset.searchname;
  const id_group = e.target.dataset.id;
  for (let i in productForms) {
    if (i == product) {
      addProductForm.innerHTML = productForms[i];
      document.querySelector('#titleDoc').textContent = product;
      if(!document.querySelector(`script[src='javascripts/admin_${product}.js']`)) {
        const script = document.createElement('script');
        script.src = `javascripts/admin_${product}.js`
        document.querySelector('body').appendChild(script);
      }
      const {
        data
      } = await axios.get(`/admin/brands/${product}`);
      let brandList = '';
      data.forEach(brand => {
        brandList += `
        <option value="${brand._id}">${brand.name}</option>
        `;
      });
      document.querySelector('.selectBrand').innerHTML += brandList;
      // document.querySelector('.groupInput').value = id_group;
    }
  }
});


