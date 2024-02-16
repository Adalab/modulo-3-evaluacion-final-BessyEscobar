import PropTypes from "prop-types";
import placeHolder from '../../docs/assets/images/placeholderHP.png'

function CharacterDetail({ name, species, image}) {
  return (
    <div>
    <li className="character__card">
      <img src={image || placeHolder} alt="Photo Character" className="character__card--img"/>
      <h3> {name} </h3>
      <p>{species}</p>
    </li>
    </div>
  );
}

CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterDetail;


