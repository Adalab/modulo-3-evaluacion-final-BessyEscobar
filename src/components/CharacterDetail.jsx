import PropTypes from "prop-types";

function CharacterDetail({ name, species }) {
  return (
    <li>
      <img src="" alt="" />
      <h3> {name} </h3>
      <p>{species}</p>
    </li>
  );
}

CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterDetail;
