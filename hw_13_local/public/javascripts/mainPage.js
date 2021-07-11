const btnCardArr = [...document.querySelectorAll('.toStore')];


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
})