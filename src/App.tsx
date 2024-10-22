import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div>
      <h1>Liste des Pokémons</h1>
      <figure>
        <figcaption>
          <PokemonCard />
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
