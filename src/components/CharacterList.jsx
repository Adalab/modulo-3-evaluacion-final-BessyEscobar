//react
import { Link } from 'react-router-dom';

//componentes
import CharacterDetail from "./CharacterDetail";

//proptypes
import PropTypes from "prop-types";

//otro

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
        <li key={characters.id} className="">
      <CharacterDetail name={character.name} species={character.species} image={character.image} house={character.house} />
    </li>
    );  
  });

  return (
    <ul>{renderCharacters}</ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
