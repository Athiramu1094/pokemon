import React from 'react'
import './randomPokemon.css'

const RandomPokemon = () => {

    const pokeNum = Math.floor(Math.random()*151)+1
    const url =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`
        return (
    <div className='randomPokemon'>
        <h1>Pokemon # {pokeNum}</h1>
        <img src={url} alt=''/>
    </div>
)
}

export default RandomPokemon
