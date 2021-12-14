import axios from 'axios';


const requestObj = {
 async getPeople(peopleID) {
   console.log('this is getPeople');
    const { data: {name, gender} } = await axios.get(`https://swapi.dev/api/people/${peopleID}/`);
    const img = `https://starwars-visualguide.com/assets/img/characters/${peopleID}.jpg`;
    console.log(name)
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