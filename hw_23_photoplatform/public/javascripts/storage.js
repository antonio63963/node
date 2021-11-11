function setStore(store) {
  const json = JSON.stringify(store);
  localStorage.setItem('store', json);
};
function getStore() {
  const dataJson = localStorage.getItem('store') || "[]";
  const data = JSON.parse(dataJson);
  return data;
};
function addToStore(id, price) {
  if(!id || !price) {
    console.log('addToStore: id or price not found!');
    return false
  };
  const store = getStore();
  const existPhoto = store.find(prod => prod.id === id);
    existPhoto ? 
    existPhoto.amount += 1 :
    store.push({id: id, amount: 1, price: price});
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

