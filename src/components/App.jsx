//estilos
import "../scss/App.scss";

//componentes
import Header from "./Header";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import Footer from "./Footer";

//otros

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <Filter></Filter>
        </section>
        <section>
          <CharacterList></CharacterList>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
