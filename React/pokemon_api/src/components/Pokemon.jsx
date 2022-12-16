import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [allPokemon, setAllPokemon] = useState([]);

    const callPokemonApi = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=870')
        .then(response => setAllPokemon(response.data.results))
    };

    return (
        <>
            <button onClick={callPokemonApi}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, i) => {
                    return (
                        <p>{i+1}. {pokemon.name}</p>
                    );
                })
            }
        </>
    )
}

export default Pokemon;