import React, { useEffect } from "react";
import { CharacterType } from "../types/characterType";
import { getCharacters } from "../api/get-characters";
import Character from "./Character";

export default function CharactersApp(): JSX.Element {
  const [characters, setCharacters] = React.useState([] as CharacterType[]);
  const [pageNumber, setPageNumber] = React.useState(1 as number);

  const handleClick = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const newCharacters = await getCharacters(pageNumber);
      setCharacters(newCharacters);
    };

    fetchCharacters();
  }, [pageNumber]);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map(
        (character: CharacterType): JSX.Element => (
          <React.Fragment key={character.url}>
            <Character character={character} />
            <br />
          </React.Fragment>
        )
      )}
      <button onClick={handleClick}>Load More Characters</button>
      <div>Next Page: {pageNumber}</div>
    </div>
  );
}
