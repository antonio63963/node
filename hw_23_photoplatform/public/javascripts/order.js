// const getInvoiceBtn = document.querySelector('#getInvoice');
const buyerForm = document.forms.buyer;

buyerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { order_id } = e.currentTarget.dataset;
  const formData = new FormData(e.target);
  const { data } = await axios.post(`/order/getPayForm/${order_id}`, formData);
  if(data.status === 'ok') {
    window.location = data.payload;
  }
})