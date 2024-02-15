//react
import { useState } from "react";

//estilos
import "../scss/App.scss";

//componentes
import Header from "./Header";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import Footer from "./Footer";

//otros
import dataCharactes from "../data/apiData.json";

function App() {
  const [characterList, setCharactersList] = useState(dataCharactes);

  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <Filter></Filter>
        </section>
        <section>
          <CharacterList characterList={dataCharactes}></CharacterList>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
