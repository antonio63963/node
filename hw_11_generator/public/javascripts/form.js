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
    const container = document.querySelector('.container');
    let planetList = '';
    resp.data.resArr.forEach( planet => {
      const img = planet.img ? planet.img : `https://starwars-visualguide.com/assets/img/placeholder.jpg`
      planetList += `
      <div class= "planetCard">
        <img src="${img}" alt="planet">
        <ul>
          <li>name: ${planet.name}</li>
          <li>population: ${planet.population}</li>
          <li>diameter: ${planet.diameter}</li>
          <li>surface water: ${planet.surfaceWater}</li>
        </ul>
      </div>
      <hr>
    `;
    container.innerHTML = planetList;
    })
  }
})

