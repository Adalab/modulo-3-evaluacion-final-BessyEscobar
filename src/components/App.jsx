//react
import { useEffect, useState } from "react";

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

 //4.- funciones o variables para html

 //5.- el html en el return
  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <Filter></Filter>
        </section>
        <section>
          <CharacterList characters={characters}></CharacterList>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
