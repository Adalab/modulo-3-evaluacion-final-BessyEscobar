
const Api = ( ) => {
 
  return fetch('https://hp-api.onrender.com/api/characters')
    .then( (response) => response.json() )
    .then( (responseData) => {
      const result = responseData.map( (eachObj) => ({
          id: eachObj.id,
          name: eachObj.name,
          image: eachObj.image,
          species: eachObj.species,
          house: eachObj.house,
          gender: eachObj.gender,
          alive: eachObj.alive,
      }));
      return result;
      });
};

export default Api;