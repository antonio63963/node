const getInvoiceBtn = document.querySelector('#getInvoice');

getInvoiceBtn.addEventListener('click', async (e) => {
  const { order_id } = e.currentTarget.dataset;
  const { data } = await axios.get(`/order/getPayForm/${order_id}`);
  if(data.status === 'ok') {
    window.location = data.payload;
  }
})