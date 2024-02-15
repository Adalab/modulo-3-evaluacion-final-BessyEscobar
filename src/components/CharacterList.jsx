import CharacterDetail from "./CharacterDetail";

function CharacterList() {
  return (
    <ul>
      <CharacterDetail name="Harry Potter" spices="human"></CharacterDetail>
      <CharacterDetail name="Hermione Granger" spices="human"></CharacterDetail>
    </ul>
  );
}

export default CharacterList;
