import { useState, useEffect } from "react";

async function fetchgames() {
  return new Promise((resolve) => {
    resolve([
      { id: 1, name: "Mario", inStock: true },
      { id: 2, name: "Crash Bandicoot", inStock: true },
      { id: 3, name: "Mega Man", inStock: false },
      { id: 4, name: "Pokemon", inStock: true },
      { id: 5, name: "Sonic", inStock: false },
      { id: 6, name: "Rayman", inStock: true },
      { id: 7, name: "Donkey Kong", inStock: true },
    ]);
  });
}
export default function Games() {
  const [games, setGames] = useState([]);

  function handleToggle(id) {
    setGames(
      games.map((game) => {
        return game.id === id ? { ...game, inStock: !game.inStock } : game;
      })
    );
  }
  useEffect(() => {
    async function getGames() {
      const res = await fetchgames();
      console.log(res);
      setGames(res);
    }
    getGames();
  }, []);

  return (
    <div>
      {games.map((game) => {
        const { id, name, inStock } = game;
        return (
          <div key={id}>
            <p>{name}</p>
            <p> {inStock === true ? "In stock" : "Out of stock"}</p>
            <button onClick={() => handleToggle(id)}>toggle</button>
          </div>
        );
      })}
    </div>
  );
}
