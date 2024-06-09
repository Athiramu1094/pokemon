import React, { useState } from 'react'
import './randomPokemon.css'

const RandomPokemon = () => {
    const [num, setNum] = useState(69);
    const [url, setUrl] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`);

    function changeNumber() {
        const pokeNum = Math.floor(Math.random() * 151) + 1;
        const newUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;
        setNum(pokeNum);
        setUrl(newUrl);
    }

    return (
        <div className='randomPokemon'>
            <h1>Pokemon # {num}</h1>
            <img src={url} alt='Random Pokemon'/>
            <button onClick={changeNumber}>Change Pokemon</button>
        </div>
    );
}


export default RandomPokemon
