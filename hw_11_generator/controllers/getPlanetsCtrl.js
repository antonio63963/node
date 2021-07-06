const axios = require("axios");

async function getPlanets(reqArr) {

  const promisesArr = reqArr.map(async (id) => {
    const { data } = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    return data;
  });
  console.log(promisesArr);
  const awaitArr = await Promise.all(promisesArr);

  console.log(awaitArr);
  resArr = awaitArr.map((planet, ind) => {
    return {
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      surfaceWater: planet.surface_water,
      img:
        reqArr[ind] != 1
          ? `https://starwars-visualguide.com/assets/img/planets/${reqArr[ind]}.jpg`
          : `https://starwars-visualguide.com/assets/img/placeholder.jpg`,
    };
  });
  return resArr;
};

module.exports = getPlanets;

