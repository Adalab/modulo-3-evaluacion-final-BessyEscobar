//react

//componentes
import CharacterDetail from "./CharacterDetail";

//proptypes
import PropTypes from "prop-types";

//otro

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
        <li key={characters.id} className="">
      <CharacterDetail name={character.name} spices={character.species} image={character.image} />
    </li>
    );  
  });

  return (
    <ul>{renderCharacters}</ul>
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.array,
};

export default CharacterList;
