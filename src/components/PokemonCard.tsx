import "./PokemonCard";

function PokemonCard({ pokemon }) {
  return (
    <div>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <h2>{pokemon.name}</h2>
    </div>
  );
}
export default PokemonCard;
