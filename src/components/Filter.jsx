import PropTypes from 'prop-types';

import "../scss/App.scss";


function Filter( { setFilterName, setFilterHouse, filterName, filterHouse, handleResetButton } ) {
//para filtar por nombre
const handleFilterInput = (event) =>{
setFilterName(event.currentTarget.value)
}
//para filtrar por casa
const handleFilterSelect = (event) => {
  setFilterHouse(event.currentTarget.value)
}

  return (
    <div className='form'>
    <form className="search">

      {/* Para buscar por nombre */}
      <label htmlFor="" className="search__character">
        Search by character:
      <input type="text" 
      className="search__character--inp" 
      value={filterName} 
      onChange={handleFilterInput}/>
      </label>

      {/* Para buscar por casa */}
      <label htmlFor="house" className="search__house">
        Select a house:      
      <select className="search__house--sel" 
      value={filterHouse} 
      onChange={handleFilterSelect} >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="all">All Characters</option>
      </select>
      </label>
      
    </form>

    <button className="resetBtn" 
    onClick={handleResetButton}>
    Forget it 🪄
    </button>

    </div>
  );
}

Filter.propTypes = {
  setFilterName: PropTypes.func.isRequired,
  setFilterHouse: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterHouse: PropTypes.string.isRequired,
  handleResetButton: PropTypes.func.isRequired,
}

export default Filter;
