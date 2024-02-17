import PropTypes from "prop-types";
import placeHolder from '../image/placeholderHP.png'

function CharacterDetail({ name, species, image, house}) {
  return (
    <div>

      {/* //link */}
    <li className="character__card">
      <img src={image || placeHolder} alt="Photo Character" className="character__card--img"/>
      <h3> {name} </h3>
      <p>{species}</p>
      <p>{house}</p>
    </li>
    </div>
  );
}

CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
  house: PropTypes.string,
};

export default CharacterDetail;


