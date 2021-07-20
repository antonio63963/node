console.log('it works');
const form = document.forms.userNum;
const getListBtn = document.querySelector('.getListBtn');
const container = document.querySelector('.container');
const socket = new WebSocket('ws://localhost:3000');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const num = formData.get('num');
  const req = JSON.stringify({type: 'userNumber', data: num});
  socket.send(req);
});
console.log(getListBtn);
getListBtn.addEventListener('click', (e) => {
  const req = JSON.stringify({type: 'prodList'})
  socket.send(req)
})

// socket.addEventListener('open', (e) => {
//   socket.send('Hello Server!');
// });

socket.addEventListener('message', (e) => {
  console.log('Message from server ', e.data);
  const res = JSON.parse(e.data);
  if(res.type == 'prodList') {
    buildProdList(res.data)
  }
});


function buildProdList(data) {
  if(Array.isArray(data)) {
    const prodArr = data.reduce((acc, {id, title, description, price}) => {
      acc += `
      <div class="card"
       data-id="${id}"
       data-name="${title}"
       data-price="${price}"
       >
      <h2>${title}</h2>
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
  }
}