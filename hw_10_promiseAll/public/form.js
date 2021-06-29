const formId = document.forms.planetsId;
const url = `/form/req`;

formId.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = [...formId.querySelectorAll('input')];

  const resObj = formData.reduce((acc, ind) => {
    acc[ind.name] = ind.value;
    return acc;
  }, {})

  const resp = await axios.post(url, resObj);
  if(resp.status === 200) {
    console.log(resp.data);
   
  }
})

