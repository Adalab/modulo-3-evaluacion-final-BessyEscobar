import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

import "../scss/App.scss";

function CharacterList({ filterCharacters, filterName,  }) {


  if (filterCharacters.length === 0) {
   return <p> {filterName} sorry, we can not find you 💔</p>
  } else {
    
    return (
      <ul className="character__list">

        {filterCharacters.map( characters => 
           <li key={characters.id}>
            <Link to={`/CharacterCard/${characters.id}`}
            data={characters} >
              <CharacterCard filterCharacters={characters} />
            </Link>
          </li>
        )}

      </ul>
    );
  }

}

CharacterList.propTypes = {
  filterCharacters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  filterName: PropTypes.string.isRequired,
};

export default CharacterList;
