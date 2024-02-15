import PropTypes from "prop-types";

function CharacterDetail({ name, spices }) {
  return (
    <li>
      <img src="" alt="" />
      <h3> {name} </h3>
      <p> {spices} </p>
    </li>
  );
}

CharacterDetail.propTypes = {
  name: PropTypes.string,
  spices: PropTypes.string,
};

export default CharacterDetail;
