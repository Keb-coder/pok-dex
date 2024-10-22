import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <h1>Liste des Pokémons</h1>
      <figure>
        <figcaption>
          <PokemonCard pokemon={pokemonList[0]} />
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
