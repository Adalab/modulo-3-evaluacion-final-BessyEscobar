import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import '../scss/App.scss';

function CharacterCard( {characters, name, species, image, id} ) {
    return (
    < Link to={'/CharacterCard/'+characters.id} //cambiar este link a Character Detail añadir el botoonn de volver para APP
    > 
      <div>
      
        <img src={characters.image || placeHolder} alt="Photo Character" className="character__card--img"/>
        <div>
        <h3> {characters.name} </h3>
        <p>{characters.species}</p>
        </div>
      </div>
    </Link>
    )

}

CharacterCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
};


export default CharacterCard;