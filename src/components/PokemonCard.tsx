import "./App.css";

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

function PokemonCard() {
  return (
    <div>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
        <figcaption>
          <p>Bulbasaur</p>
        </figcaption>
      </figure>
    </div>
  );
}
export default PokemonCard;
