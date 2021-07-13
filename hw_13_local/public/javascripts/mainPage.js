const btnCardArr = [...document.querySelectorAll('.toStore')];
const orderForm = document.forms.orderForm;
const orderBtn = document.querySelector('.submit');
const incAmountBtn = document.querySelector('.inc');
const decAmountBtn = document.querySelector('.dec');
const deleteProdBtn = document.querySelector('.del');

function setStore(store) {
  const json = JSON.stringify(store);
  localStorage.setItem('store', json);
};
function getStore() {
  const dataJson = localStorage.getItem('store') || "[]";
  const data = JSON.parse(dataJson);
  return data;
};
function addToStore(id) {
  const store = getStore();
  const existProd = store.find(prod => prod.id === id);
    existProd ? 
    existProd.amount += 1 :
    store.push({id: id, amount: 1});
  setStore(store);
};
function removeFromStore(id) {
  const store = getStore();
  const ind = store.findIndex(item => item.id === id);
  if(ind !== -1) {
    delete store[ind];
  }
  setStore(store);
};
function increaseStoreAmount(id) {

}


btnCardArr.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const {id} = e.target.dataset;
  addToStore(id);

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

function getUnusefulElem(arr) {
  const methodName = formData.get(`deliveryMethods`);
  return arr.filter(elem => elem)
}



}