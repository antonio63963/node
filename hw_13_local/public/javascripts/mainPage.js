const btnCardArr = [...document.querySelectorAll('.toStore')];
const orderForm = document.forms.orderForm;
const orderBtn = orderForm.querySelector('.submit');


btnCardArr.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const {id} = e.target.dataset;
    const dataJson = localStorage.getItem('store') || "[]";
    const data = JSON.parse(dataJson);
    const existProd = data.find(prod => prod.id === id);
    
    existProd ? 
    existProd.amount += 1 :
    data.push({id: id, amount: 1});
    
    const storeJson = JSON.stringify(data);
    console.log(data);
    localStorage.setItem('store', storeJson)
    
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
        service.classList.add('hidden')
      }
    })

  })
orderBtn.addEventListener('submit', (e) => {})
  const formData = new FormData(orderForm);
  // console.log(formData.getAll(deliveryMethod));

}