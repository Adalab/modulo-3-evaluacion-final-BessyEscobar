import "../scss/App.scss";

function Filter( { handleFilter, filterName } ) {

 const handleFilterInput = (event) => {
  
  handleFilter(event.currentTarget.value);

 };

  return (
    <form className="search">

      {/* Para buscar por nombre */}
      <label htmlFor="" className="search__character">
        Search by character:{" "}
      </label>
      <input type="text" className="search__character--inp" value={filterName} onInput={handleFilterInput}/>
      
      {/* Para buscar por casa */}
      <label htmlFor="" className="search__house">
        Select a house:{" "}
      </label>
      <select name="" id="" className="search__character--sel"  onInput={'handleSelect'} >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Allhouses">All Houses</option>
      </select>
    </form>
  );
}

export default Filter;
