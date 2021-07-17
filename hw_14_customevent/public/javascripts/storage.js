function setStore(store) {
  const json = JSON.stringify(store);
  localStorage.setItem('store', json);
};
function getStore() {
  const dataJson = localStorage.getItem('store') || "[]";
  const data = JSON.parse(dataJson);
  return data;
};
function increaseAmount(id) {
  const store = getStore();
  const prod = store.find(prod => prod.id = id);
  prod.amount += 1;
  setStore(store);
}
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

