import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextClick = () => {
    setPokemonIndex((Index) =>
      Index < pokemonList.length - 1 ? Index + 1 : Index,
    );
  };

  const handlePreviousClick = () => {
    setPokemonIndex((Index) => (Index > 0 ? Index - 1 : Index));
  };
  return (
    <div>
      <h1>Liste des Pokémons</h1>
      <figure>
        <figcaption>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <button type="button" onClick={handlePreviousClick}>
            Précedent
          </button>
          <button type="button" onClick={handleNextClick}>
            Suivant
          </button>
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
