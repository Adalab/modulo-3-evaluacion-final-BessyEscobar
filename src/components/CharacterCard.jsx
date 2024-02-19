import PropTypes from "prop-types";

import placeHolder from '../image/placeholderHP.png'

import '../scss/App.scss';

function CharacterCard( { filterCharacters } ) {
    return (
      <div>
      
        <img src={filterCharacters.image || placeHolder} alt="Photo Character" className="character__card--img"/>
        <div>
        <h3>Name: {filterCharacters.name} </h3>
        <p>Specie: {filterCharacters.species} </p>
        <p>House: {filterCharacters.house} </p>
        </div>
      </div>
    );

}

CharacterCard.propTypes = {
  filterCharacters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default CharacterCard;