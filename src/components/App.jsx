//react
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
//estilos
import "../scss/App.scss";

//componentes
import Header from "./Header";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import Footer from "./Footer";

//otros
// import dataCharactes from "../data/apiData.json";
import { fetchCharacter } from "../services/fetch";
import ls from '../services/localStorage';

function App() {

  //1. Variables de estado
  const [characters, setCharacters] = useState( ls.get('character', []) );

  // const [characterList, setCharactersList] = useState(dataCharactes);// no la estoy usando  
 //2.- useEffect

 useEffect(() => {

  if( !ls.includes('character') ) {
    fetchCharacter()
      .then(responseData => {
        setCharacters(responseData);
        ls.set('character', responseData)
      });
  }

 }, [characters])

 //3.- funciones de evento
 
 const [filterName, setFilterName] = useState('');//pasar a variables de estado filtrado por nombre

 const [filterHouse, setFilterHouse] = useState('Gryffindor') //subir a variables de estado filtrar por casa

const handelSelect = ( filter, value) => {
  if ( filter === 'house') {
    setFilterHouse(value);
  } else {
    fetch (`https://hp-api.onrender.com/api/characters/house/${filterHouse}`)
    .then( response => response.json())
    .then(data => {
      setCharacters(data);
    });
  }

  console.log(value);//quitarlo luego select
//   setFilterHouse(value)
} ;


 const filterSelect = characters.filter( characters => {
  return filterHouse === 'all' || characters.house === filterHouse;
 });



 const handleFilter = ( value ) => { 
  console.log(value);//quitar luego input

  setFilterName(value);
 };


const filterInput = characters.filter( characters => {
  return characters.name.toLowerCase().includes( filterName.toLowerCase() );
});



  
   
  


 //4.- funciones o variables para html

 //5.- el html en el return
  return (
    <div>
      <Header></Header>
      <main>

        <Routes>
          
        <Route path='/' element={ 
        <>
        <Filter 
        handleFilter={handleFilter} 
        filterInput={filterInput} 
        
        handleSelect={handelSelect}
        filterSelect={filterSelect}

        /> 
        
        <CharacterList characters={filterInput}/> 
        </>  }>
        
        </Route>
        
        {/* <Route path='/CharacterCard/:id' element={ character card } /> */}

        </Routes>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
