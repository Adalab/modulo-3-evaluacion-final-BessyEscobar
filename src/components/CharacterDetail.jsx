import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ls from '../services/localStorage';

import placeHolder from '../image/placeholderHP.png';

import "../scss/App.scss";

import Main from "./Main";// cambiar por la nueva pag que hay que crear.

function CharacterDetail( { characters, alive, image } ) {
  const { characterName } = useParams();
  const characterFound = characters.filter( (obj) => obj.id === characterName );
  console.log(characterFound[0]);
  let personage = characterFound[0];
  if (personage === undefined) {
    personage = ls.get('character', {});
  }
  
  useEffect( () => {
    ls.set('character', {
      name: personage.name,
      house: personage.house,
    }); 
  }, [personage] );

  return characterFound.length !== 0 ? (

    <div>
      <section>
  
      <Link>
      <button>Back</button>
      </Link>

      </section>
      <article>
        <div>

          <img 
          src={image || placeHolder}
          alt="Photo Character" 
          className="character__card--img" />

          <div className="character__description">
            <h3> {personage.name} </h3>
            <p>Status: {alive} </p>
            <p>Species: {personage.species} </p>
            <p>Gender: {personage.gender} </p>
            <p>House: {personage.house} </p>
          </div>
        </div>
      </article>
    </div>
  ) : (
    <Main/>
  )

}

CharacterDetail.propTypes = {
 characters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
 alive: PropTypes.string,
 image: PropTypes.element,
};

export default CharacterDetail;