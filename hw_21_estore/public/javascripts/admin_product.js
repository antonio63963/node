const selecCategory = document.querySelector('.selecCategory'),
  selecGroup = document.querySelector('.selecGroup'),
  selectCategoryURL = `/admin/selectCategory`,
  selectGroup = document.querySelector('.selectGroup'),
  selectGroupURL = `/admin/selectGroup`,
  addProductForm = document.querySelector('.add_productForm'),
  featuresForm = document.forms.features,
  generalForm = document.forms.general,
  inputPhotoContainer = document.querySelector('.inputPhotoContainer');
  console.log('form elem: ', generalForm.elements);

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

// img input
function increaseImgAmount() {
  let countImgInput = 1;
  return function(e) {
    console.log(e.target);
      if(e.target.classList.contains('addOneElse')) {
        inputPhotoContainer.innerHTML += `
          <div class="inputPhoto-${countImgInput + 1}">
            <p>
            <span>Загрузить фото</span> #
            <span class="PhotoAmaunt"> ${countImgInput + 1}</span>
            </p>
            <div class="input-group d-flex flex-nowrap mb-3">
              <input type="file" class="form-control" id="inputGroupFile02" name="uploaded_file">
              <button class="btn btn-outline-secondary addOneElse" type="button" id="inputGroupFileAddon04">+ one else</button>
            </div>
          </div>
        `;
        countImgInput++;
      }
  }
};
const onButtonImg = increaseImgAmount();
inputPhotoContainer.addEventListener('click', onButtonImg);

// features product
selectGroup.addEventListener('click', async (e) => {
  const {producttype, id} = e.target.dataset;
  const { data } = await axios.post(`/admin/prod_temp/`, {producttype, id});
  if(data.status === 'ok') {
    const { brandList, productTemplate } = data.payload;
    document.querySelector('.selectBrand').innerHTML += brandList;
    document.querySelector('.groupInput').value = id;
    generalForm.elements.type.value = producttype;
    featuresForm.insertAdjacentHTML('afterbegin', productTemplate);
    initFormSubmit();
  }
});

function initFormSubmit() {
  let generalFormData = null;
  generalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form1');
    generalFormData = new FormData(e.target);
  });
  featuresForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const event = new Event('submit');
    generalForm.dispatchEvent(event);
    const featureFormData = new FormData(e.target);
    const featuresNames = getAllInputsName(featuresForm);
    const featuresObj = featuresNames.reduce((acc, name) => {
      acc[name] = featureFormData.getAll(name).join();
      return acc;
    }, {});
    console.log('acc: ', featuresObj);
    generalFormData.append('features', JSON.stringify(featuresObj));
    console.log(generalFormData.getAll('features'));
    const { data } = await axios.post('/admin/newProduct', generalFormData, featuresObj);
    console.log(data);
  })
};

function getAllInputsName(form) {
  const arrInputs = [...form.elements];
  const arrNames = arrInputs.reduce((acc, item) => {
    if(item.name) acc.push(item.name);
    return acc;
  }, [])
  return [... new Set(arrNames)];
}







