//react
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

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

 }, [])

 //3.- funciones de evento
 
 const [filterName, setFilterName] = useState('');//pasar a variables de estado

 const handleFilter = ( value ) => { 
  console.log(value);

  setFilterName(value);
 };


 const filterInput = characters.filter( characters => {
  if(filterName === '' ) {
    return true;
  }
  else{
    return characters.name === filterName;
  }
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
        <Filter handleFilter={handleFilter} filterInput={filterInput} /> 
        
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
