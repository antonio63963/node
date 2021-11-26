import axios from 'axios';
async function requestPeopleSwapi(peopleID) {
  const { data: {name, gender} } = await axios.get(`https://swapi.dev/api/people/${peopleID}/`);
  const img = `https://starwars-visualguide.com/assets/img/characters/${peopleID}.jpg`;
  const obj = {
    name, gender, img
  }
  console.log(obj);
  return obj;
};
async function requestPlanetSwapi(planetID) {
  const { data } = await axios.get(`https://swapi.dev/api/people/${planetID}/`);
  const img = `https://starwars-visualguide.com/assets/img/characters/${planetID}.jpg`;
  const obj = {
    img
  }
  console.log(obj);
  return obj;
};

const requestObj = {
 async getPeople(peopleID) {
    const { data: {name, gender} } = await axios.get(`https://swapi.dev/api/people/${peopleID}/`);
    const img = `https://starwars-visualguide.com/assets/img/characters/${peopleID}.jpg`;
    const obj = {
      name, gender, img
    }
    console.log(obj);
    return obj;
  },
 async getPlanets(planetID) {
    const { data } = await axios.get(`https://swapi.dev/api/people/${planetID}/`);
    const img = `https://starwars-visualguide.com/assets/img/planets/${planetID}.jpg`;
    const obj = {
      img, 
      name: data.name
    }
    console.log(obj);
    return obj;
  }
}

export default requestObj;