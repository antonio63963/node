function setStore(store) {
  const json = JSON.stringify(store);
  logcalStorage.setItem('store', json);
};
function getStore(store) {
  const dataJson = localSrorage.getItem('store') || "[]";
  const data = JSON.parse(dataJson);
  return data;
} 
