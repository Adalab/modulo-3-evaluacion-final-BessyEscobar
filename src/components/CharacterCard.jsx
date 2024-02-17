import { Link } from 'react-router-dom';
import '../scss/App.scss';

function CharacterCard( {characters} ) {
    return (
      <div>
      
        <img src={characters.image || placeHolder} alt="Photo Character" className="character__card--img"/>
        <h3> {characters.name} </h3>
        <p>{characters.species}</p>
    
      </div>
    )

}



export default CharacterCard;