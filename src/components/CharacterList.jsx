//react

//componentes
import CharacterDetail from "./CharacterDetail";

//proptypes
import PropTypes from "prop-types";

//otro

function CharacterList({ characterList }) {
  const characterHtml = characterList.map((character, id) => (
    <li key={id} className="">
      <CharacterDetail name={character.name} spices={character.species} />
    </li>
  ));

  return <ul>{characterHtml}</ul>;
}

CharacterList.propTypes = {
  characterList: PropTypes.array,
};

export default CharacterList;
