console.log('storage.js');
function setStore(store) {
  const json = JSON.stringify(store);
  localStorage.setItem('store', json);
};
function getStore(store) {
  const dataJson = localStorage.getItem('store') || "[]";
  const data = JSON.parse(dataJson);
  return data;
};
function addToStore(product) {
  const store = getStore();
  const isExistProd = store.find(prod => prod.id === product.id);
  isExistProd ?
  isExistProd.amount += 1 :
  store.push({...product, amount: 1})
  setStore(store);
};
function howManyProducts() {
  const store = getStore();
  const amount = store.reduce((acc, prod) => {
    acc += +prod.amount;
    return acc;
  }, 0);
  return amount;
}
