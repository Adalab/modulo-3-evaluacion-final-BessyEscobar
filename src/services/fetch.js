


export function fetchCharacter() {
   return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then( response => response.json() )
    .then( responseData => {
      return responseData.map( (eachObj) => {
        return {
          id: eachObj.id,
          name: eachObj.name,
          image: eachObj.image,
          species: eachObj.species,
          house: eachObj.house,
          gender: eachObj.gender,
          alive: eachObj.alive,
        }
      }) 
    })
}
