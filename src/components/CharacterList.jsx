//react
// import { Link } from 'react-router-dom';

//componentes
import CharacterDetail from "./CharacterDetail";

//proptypes
import PropTypes from "prop-types";

//otro

function CharacterList({ characters }) {
  const renderCharacters = characters.map((characters) => {
    return (
        <li key={characters.id} className="">
      <CharacterDetail name={characters.name} species={characters.species} image={characters.image} house={characters.house} />
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
