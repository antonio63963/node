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
    <input type="text" class="form-control modelInput" placeholder="model" aria-label="model"
      aria-describedby="addon-wrapping">
  </div>
   
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="isActiveLaptop">
    <label class="form-check-label" for="flexCheckDefault">
      isActive
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="isSaleLaptop">
    <label class="form-check-label" for="flexCheckDefault">
      isSale
    </label>
  </div>
  
  <select class="form-select selecBrand mb-3" aria-label="Default select example">
    <option selected>select the brand</option>
    <% brands.forEach( brand => { %>
    <option value="<%= brand.id%>"><%=brand.name %></option>
    <% }) %>
  </select>
  <select class="form-select selecDiagonal mb-3" aria-label="Default select example">
    <option selected>select the diagonal</option>
    <option value="13\"">13</option>
    <option value="14\"">14</option>
    <option value="15\"">15</option>
    <option value="17\"">17</option>
  </select>

  <input type="text" class="form-control processorInput mb-3" placeholder="Enter processor name"
  aria-label="search" aria-describedby="button-addon2">

  <input type="text" class="form-control imgInput mb-3" placeholder="Enter img link"
  aria-label="search" aria-describedby="button-addon2">

  <h5>Description</h5>
  <textarea class="form-control laptopDescription mb-3" aria-label="With textarea"></textarea>
  <button type="button" class="btn btn-primary submitNewLaptop"> submit </button>
`
  };


// PRODUCT
selecCategory.addEventListener('change', async (e) => {
  console.log(e.target.value);
  const {
    data
  } = await axios.post(selectCategoryURL, {
    id_category: e.target.value
  });
  console.log(data);
  let listGroups = ``;
  data.forEach(group => {
    listGroups += `<li class="list-group-item pointer" data-searchName="${group.searchName}" data-id="${group.id}">${group.name}</li>`
  });
  selectGroup.innerHTML += listGroups;
});

selectGroup.addEventListener('click', async (e) => {
  const product = e.target.dataset.searchname;
  for (let i in productForms) {
    if (i == product) {
      addProductForm.innerHTML = productForms[i];
      document.querySelector('#titleDoc').textContent = product;
      document.querySelector('body').innerHTML += `
      <script src="javascripts/admin_${product}.js"></script>
      `;
    }
  }
});