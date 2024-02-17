import "../scss/App.scss";

function Filter() {

  const handleInputCharacter = (event) => {
    console.log(event.currentTarget.value)
  }

  return (
    <form className="search">
      <label htmlFor="" className="search__character">
        Search by character:{" "}
      </label>
      <input type="text" className="search__character--inp" />
      <label htmlFor="" className="search__house">
        Select a house:{" "}
      </label>
      <select name="" id="" className="search__character--sel" onInput={handleInputCharacter}>
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
