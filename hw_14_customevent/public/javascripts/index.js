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
  myEmit.emmit('change')
}

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
  renderCart();
});

container.addEventListener('click', (e) => {
  if(!e.target.classList.contains('add')) return false;
  const {dataset} = e.target.parentElement;
  console.log(dataset);
  addToCart(dataset);
  console.log(addToCart);
  renderCart()
});

const renderCart = () => {
  const dataStore = JSON.parse(localStorage.getItem('store'));
console.log(dataStore);
  const cartObj = dataStore.reduce((acc, {name, id, price, amount}) => {
    acc.html += `
      <p>=================================</p>
      <h3>${name}</h3>
      <span>price: ${price}</span>
      <div>amount: ${amount}</div>
      <button class="increase">+</button>
      <button class="decrease">-</button>
    `;
    acc.sum += price * amount;
    return acc;
  }, {html: '', sum: 0});

  cart.innerHTML = `<h3>CART</h3` + cartObj.html + `<div> SUMM: ${cartObj.sum}</div>`
}
renderCart()




