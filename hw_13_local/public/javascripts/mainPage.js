const btnCardArr = [...document.querySelectorAll('.card')];
const orderForm = document.forms.orderForm;
const orderBtn = document.querySelector('.submit');

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
  console.log('add: ', store);
  const existProd = store.find(prod => prod.id === id);
    existProd ? 
    existProd.amount += 1 :
    store.push({id: id, amount: 1});
  setStore(store);
};
function decAmount(id) {
  const store = getStore();
  const existProd = store.find(prod => prod.id === id);
    existProd ? 
    existProd.amount -= 1 :
    false;
  setStore(store);
};
function removeFromStore(id) {
  const store = getStore();
  const ind = store.findIndex(item => item.id === id);
  if(ind !== -1) {
    store.splice(ind, 1);
  }
  setStore(store);
};


btnCardArr.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const {id} = e.currentTarget.dataset;
    console.log(getStore());
    // add or increase 
    if(e.target.classList.contains('inc') || e.target.classList.contains('toStore')) {
      addToStore(id);
    }
    // decrease amount
    if(e.target.classList.contains('dec')) {
      decAmount(id);
    }
    if(e.target.classList.contains('del')) {
      removeFromStore(id);
    }
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