interface PokemonCard {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

interface NavBar {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: PokemonCard[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBar) {
  const handleNextClick = () => {
    setPokemonIndex((Index: number) =>
      Index < pokemonList.length - 1 ? Index + 1 : Index,
    );
  };

  const handlePreviousClick = () => {
    setPokemonIndex((Index) => (Index > 0 ? Index - 1 : Index));
  };
  return (
    <div className="navbar">
      <button type="button" onClick={handlePreviousClick}>
        Précedent
      </button>
      <button type="button" onClick={handleNextClick}>
        Suivant
      </button>
    </div>
  );
}

export default NavBar;
