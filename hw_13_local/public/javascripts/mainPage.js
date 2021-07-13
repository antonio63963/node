const btnCardArr = [...document.querySelectorAll('.card')];
const orderForm = document.forms.orderForm;
const orderBtn = document.querySelector('.submit');

btnCardArr.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const {id} = e.currentTarget.dataset;

    // add or increase 
    if(e.target.classList.contains('toStore')) addToStore(id);
    
    // decrease amount
    if(e.target.classList.contains('dec')) decAmount(id);

    // remove product 
    if(e.target.classList.contains('del')) removeFromStore(id);

  })
});

if(orderForm) {
  orderForm.addEventListener('click', (e) => {
    if(e.target.name !== 'deliveryMethods') return false;
    const selectedMethod = e.target.value;
    const postServices = orderForm.querySelectorAll('.delivery');
    postServices.forEach(service => {
      if(service.classList.contains(selectedMethod)) {
        service.classList.remove('hidden');
      } else {
        service.classList.add('hidden');
      }
    })
  })
orderBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const url = `formreq`;
  const formData = new FormData(orderForm);
  const {data} = await axios.post(url, formData);
  console.log(data);
});

}