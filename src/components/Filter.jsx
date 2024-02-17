import PropTypes from 'prop-types';

import "../scss/App.scss";


function Filter( { handleFilter, filterName, handleSelect, filterSelect } ) {

  //para filtrar el nombre
 const handleFilterInput = (event) => {
  handleFilter(event.currentTarget.value);
 };

 //para filtrar la casa
 const handleFilterSelect = (event) => {
  console.log(event.currentTarget.value)
  handleSelect("house", event.currentTarget.value);
 };

  return (
    <form className="search">

      {/* Para buscar por nombre */}
      <label htmlFor="" className="search__character">
        Search by character:{" "}
      <input type="text" className="search__character--inp" value={filterName} onInput={handleFilterInput}/>
      </label>

      {/* Para buscar por casa */}
      <label htmlFor="house" className="search__house">
        Select a house:{" "}
      
      <select className="search__character--sel" value={filterSelect} onChange={handleFilterSelect} >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="all">All Houses</option>
      </select>
      </label>
    </form>
  );
}

Filter.propTypes = {
  filterSelect: PropTypes.string,
  handleSelect: PropTypes.func,
  filterName: PropTypes.string,
  handleFilter: PropTypes.func,
}

export default Filter;
