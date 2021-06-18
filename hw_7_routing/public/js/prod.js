const container = document.querySelector('.containterProd');
const prodBtn = document.querySelector('.btn-action');

function getProd() {
  axios.get('prod/list')
    .then( resp => {
      console.log(resp);
      let htmlTemp = ''
      resp.data.forEach(item => {
        htmlTemp += `<div class="card">
        <h2 class="card-title">${item.title}</h2>
        <p class="card-description">${item.description}</p>
        <span class="card-price">${item.price}</span>
        </div>`
      });
      container.innerHTML = htmlTemp;
      prodBtn.style.display = 'none'
    })
}

prodBtn.addEventListener('click', getProd);

