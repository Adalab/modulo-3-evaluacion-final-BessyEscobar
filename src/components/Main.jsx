import PropTypes from "prop-types";
import Filter from "./Filter";
import CharacterList from "./CharacterList";

import '../scss/App.scss';

function Main( { filterCharacters, setFilterName, setFilterHouse, filterName, filterHouse, handleResetButton  } ) {
    return (
        <main>
            <Filter setFilterName={setFilterName}
            setFilterHouse={setFilterHouse}
            filterName={filterName}
            filterHouse={filterHouse}
            handleResetButton={handleResetButton}
            />

            <CharacterList filterCharacters={filterCharacters} filterName={filterName} /> 
                
        </main>

    ) }

Main.propTypes = {
    filterCharacters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    setFilterName: PropTypes.func.isRequired,
    setFilterHouse: PropTypes.func.isRequired,
    filterName: PropTypes.string.isRequired,
    filterHouse: PropTypes.string.isRequired,
    handleResetButton: PropTypes.func.isRequired,
};

export default Main;