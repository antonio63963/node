
const laptopForm = document.forms.laptop;
const inputPhotoContainer = document.querySelector('.inputPhotoContainer');
const newLaptopURL = `/admin/newLaptop`;


inputPhotoContainer.addEventListener('click', (e) => {
  const { num } = e.target.dataset;
  let count = +num;
  if(!count) return false;
  
  inputPhotoContainer.innerHTML += `
    <div class="inputPhoto-${count + 1}">
      <p>
      <span>Загрузить фото</span> #
      <span class="PhotoAmaunt"> ${count + 1}</span>
      </p>
      <div class="input-group d-flex flex-nowrap mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" name="uploaded_file">
        <button class="btn btn-outline-secondary addOneElse" type="button" id="inputGroupFileAddon04" data-num="${+num + 1}">+ one else</button>
      </div>
    </div>
  `;
})

laptopForm.addEventListener('submit', async(e) => {
  console.log( document.querySelector('.groupInput').value);
  e.preventDefault();
 
  const formData = new FormData(e.target);
  const { data } = await axios.post(newLaptopURL, formData);
  console.log(data);
});

