import { useRef, useState } from 'react';

const Fitch = () => {
  const pokemonName = useRef(null);
  const catchPokemon = useRef(new Map());
  const [poke, setPoke] = useState(null);
  const [err, setErre] = useState(false);

  const searchPokemon = () => {
    const pokemon = pokemonName.current.value;

    if (catchPokemon.current.has(pokemon)) {
      const pokemonPutState = catchPokemon.current.get(pokemon);
      setPoke(pokemonPutState);
      console.log(catchPokemon.current, poke);
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        if (!response.ok) {
          setErre(true);
          setPoke(null);
          return;
        }
        return response.json();
      })
      .then((json) => {
        catchPokemon.current.set(pokemon, json);
        setPoke(json);
        console.log(catchPokemon.current.get(pokemon));
      });
  };

  return (
    <div>
      <input type="text" ref={pokemonName} />
      <button onClick={searchPokemon}>Searcch</button>
      {err && <h1>Erreur</h1>}
      {poke && (
        <>
          <h1>{poke.name} </h1>
          <img src={poke.sprites.back_default} alt="" />
        </>
      )}
    </div>
  );
};

export default Fitch;
