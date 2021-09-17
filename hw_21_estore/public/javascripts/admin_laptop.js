// const modelInput = document.querySelector('.modelInput'),
// isActiveLaptop = document.querySelector('#isActiveLaptop'),
// isSaleLaptop = document.querySelector('#isSaleLaptop'),
// selecBrand  = document.querySelector('.selecBrand'),
// selecDiagonal  = document.querySelector('.selecDiagonal'),
// processorInput = document.querySelector('.processorInput'),
// imgInput = document.querySelector('.imgInput'),
// laptopDescription = document.querySelector('.laptopDescription'),

const laptopForm = document.forms.laptop;
const newLaptopURL = `/admin/newLaptop`;
laptopForm.addEventListener('submit', async(e) => {
  console.log( document.querySelector('.groupInput').value);
  e.preventDefault();
 
  const formData = new FormData(e.target);
  const { data } = await axios.post(newLaptopURL, formData);
  console.log(data);
})
