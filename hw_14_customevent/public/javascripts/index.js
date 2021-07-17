const getList = document.querySelector('.getList');
const container = document.querySelector('.container');
const cart = document.querySelector('.cart');

const EE = function() {
  const list = {};
  this.on = (eventName, cb) => {
    if(!list[eventName]) {
      list[eventName] = [];
    }
    list[eventName].push(cb);
  }
  this.emmit = (eventName, data) => {
    if(!list[eventName]) return;
    list[eventName].forEach(cb => cb(data));
  }
};

const myEmit = new EE();

myEmit.on('change', () => {
  console.log('change');
})
const addToCart = (data) => {
  addToStore(data);
  myEmit.emmit('change');
  // renderCart();
}
//storage

function setStore(store) {
  const json = JSON.stringify(store);
  localStorage.setItem('store', json);
};
function getStore() {
  const dataJson = localStorage.getItem('store') || "[]";
  const data = JSON.parse(dataJson);
  return data;
};

function addToStore(data) {
  console.log(data);
  const store = getStore();
  const existProd = store.find(prod => prod.id === data.id);
    existProd ? 
    existProd.amount += 1 :
    store.push({...data, amount: 1});
  setStore(store);
};
function decAmount(id) {
  const store = getStore();
  const existProd = store.find(prod => prod.id === id);
  if(existProd && existProd.amount > 1) {
    existProd.amount -= 1 
    setStore(store);
  } else if (existProd && existProd.amount <= 1) {
      removeFromStore(id);
  } else {
    false;
  }
};
function removeFromStore(id) {
  const store = getStore();
  const ind = store.findIndex(item => item.id === id);
  console.log(ind);
  if(ind !== -1) {
    store.splice(ind, 1);
  }
  setStore(store);
};
// listeners
getList.addEventListener('click', async (e) => {
  const {data} = await fetch('/products').then(resp => resp.json());
  const prodArr = data.reduce((acc, {id, name, description, price}) => {
    acc += `
    <div class="card"
     data-id="${id}"
     data-name="${name}"
     data-price="${price}"
     >
    <h2>${name}</h2>
    <p>${description}</p>
    <span class="price">${price}</span>
    <button class="add"> add to cart </button>
    <br>
    <hr>
  </div>
    `;
    return acc;
  }, '');
  container.innerHTML = prodArr;
  
});

container.addEventListener('click', (e) => {
  if(!e.target.classList.contains('add')) return false;
  const {dataset} = e.target.parentElement;
  addToCart(dataset);
  
});
function increaseAmount(id) {
  const store = getStore();
  const prod = store.find(prod => prod.id === id);
  prod.amount += 1;
  setStore(store);
}
function decreaseAmount(id) {
  const store = getStore();
  const prod = store.find(prod => prod.id === id);
  prod.amount -= 1;
  setStore(store);
}
cart.addEventListener('click', (e) => {
  if(e.target.classList.contains('increase')) {
    const {id} = e.target.parentElement.dataset;
    console.log(id);
    increaseAmount(id)
    // renderCart()
    myEmit.emmit('change')

  }
  if(e.target.classList.contains('decrease')) {
    const {id} = e.target.parentElement.dataset;
    decreaseAmount(id)
    // renderCart()
    myEmit.emmit('change')
  }
})

const renderCart = () => {
  const dataStore = JSON.parse(localStorage.getItem('store'));
  const cartObj = dataStore.reduce((acc, {name, id, price, amount}) => {
    acc.html += `
      <p>=================================</p>
      <div class="cartProd" data-id="${id}"
        <h3>${name}</h3>
        <span>price: ${price}</span>
        <div>amount: ${amount}</div>
        <button class="increase">+</button>
        <button class="decrease">-</button>
      </div>
    `;
    acc.sum += price * amount;
    return acc;
  }, {html: '', sum: 0});

  cart.innerHTML = `<h3>CART</h3` + cartObj.html + `<div> SUMM: ${cartObj.sum}</div>`
}

function init() {
  renderCart();
  myEmit.on('change', renderCart)
}
init()




