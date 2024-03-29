//react
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

//estilos
import "../scss/App.scss";

//componentes
import Header from "./Header";
import Main from "./Main";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

//otros
import Api from "../services/fetch";
import ls from '../services/localStorage';


function App() {

  //1. Variables de estado
  const [characters, setCharacters] = useState( ls.get('character', []) ); // para pintar el api
  const [filterName, setFilterName] = useState('');//pasar a variables de estado filtrado por nombre
  const [filterHouse, setFilterHouse] = useState('Gryffindor') //subir a variables de estado filtrar por casa
 //2.- useEffect

 useEffect(() => {

  if( !ls.includes('character') ) {
    Api()
      .then(responseData => {
        setCharacters(responseData);
        ls.set('character', responseData)
      })
      .catch(error =>{
        console.error('Error fetching data:', error);
      });
  }
 }, [])

 //3.- funciones de evento
 
const filterSelect = characters.filter( characters => {
  if( filterHouse === 'all') {
    return characters.house === 'Gryffindor','Slytherin', 'Hufflepuff', 'Ravenclaw';
  } else{ 
    return characters.house === filterHouse;
  }
})

const filterCharacters = filterSelect.sort((a, b) => {
  return a.name.localeCompare(b.name);
}).filter( characters => 
  characters.name.toLowerCase().includes( filterName.toLowerCase() )
);

const handleResetButton = () => {
  setFilterName('')
  setFilterHouse('Gryffindor')
  ls.clear()
}


 //4.- el html en el return
  return (
    <div>
    <Header/>

    <Routes>

      <Route path='/' element={<Main 
      setFilterName={setFilterName} 
      setFilterHouse={setFilterHouse} 
      filterCharacters={filterCharacters}
      filterName={filterName}
      filterHouse={filterHouse}
      filterSelect={filterSelect}
      handleResetButton={handleResetButton}
      /> } 
      >
      <Route path='/CharacterDetail/:id' 
      element={ <CharacterCard characters={characters}/> }>
      </Route>

      <Route path="/CharacterDetail/:id" 
      element={ <CharacterDetail characters={characters}/> } >
      </Route>

      </Route>  

    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
