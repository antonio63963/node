const selecCategory = document.querySelector('.selecCategory'),
  selecGroup = document.querySelector('.selecGroup'),
  selectCategoryURL = `/admin/selectCategory`,
  selectGroup = document.querySelector('.selectGroup'),
  selectGroupURL = `/admin/selectGroup`,
  addProductForm = document.querySelector('.add_productForm'),
  featuresForm = document.forms.features;
//   features = {
//     laptop: `
//     <h2>Laptop</h2>

//       <select name="diagonal" class="form-select selecDiagonal mb-3" aria-label="Default select example">
//         <option selected>select the diagonal</option>
//         <option value="13"">13</option>
//         <option value="14"">14</option>
//         <option value="15"">15</option>
//         <option value="17"">17</option>
//       </select>

//       <select name="processor_series" class="form-select selecDiagonal mb-3" aria-label="Default select example">
//         <option selected>select the diagonal</option>
//         <option value="Intel i3">Intel i3</option>
//         <option value="Intel i5">Intel i5</option>
//         <option value="Intel i7">Intel i7</option>
//         <option value="Intel i9">Intel i9</option>
//       </select>
//       <input name="processor" type="text" class="form-control imgInput mb-3" placeholder="model processor"
//       aria-label="search" aria-describedby="button-addon2">
      
   
// `
//   };


// PRODUCT
selecCategory.addEventListener('change', async (e) => {
  const { data } = await axios.post(selectCategoryURL, {
    id_category: e.target.value
  });
  let listGroups = ``;
  data.forEach(group => {
    listGroups += `<li class="list-group-item pointer" data-productType="${group.type}" data-id="${group._id}">${group.name}</li>`
  });
  selectGroup.innerHTML += listGroups;
});

selectGroup.addEventListener('click', async (e) => {
  const {producttype, id} = e.target.dataset;
  // for (let i in features) {
  //   if (i == producttype) {
  //     addProductForm.innerHTML += features[i];
  //     document.querySelector('#titleDoc').textContent = producttype;
  //     if(!document.querySelector(`script[src='javascripts/admin_${producttype}.js']`)) {
  //       const script = document.createElement('script');
  //       script.src = `javascripts/admin_${producttype}.js`
  //       document.querySelector('body').appendChild(script);
  //     }
      const { data } = await axios.post(`/admin/prod_temp/`, {producttype, id});
      if(data.status === 'ok') {
        const { brands, productTemplate } = data.payload;
        console.log(productTemplate);
        let brandList = '';
        brands.forEach(brand => {
          brandList += `
          <option value="${brand._id}">${brand.name}</option>
          `;
        });
        document.querySelector('.selectBrand').innerHTML += brandList;
        document.querySelector('.groupInput').value = id;
        featuresForm.insertAdjacentHTML('beforeend', productTemplate)
      }

     
  // }
});


