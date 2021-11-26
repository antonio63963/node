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

export default requestPeopleSwapi;