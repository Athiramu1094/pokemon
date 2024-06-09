The RandomPokemon component is a React functional component designed to display a random Pokémon from the first generation. When a button is clicked, it updates to show a different random Pokémon. This component makes use of the official Pokémon artwork from the PokeAPI.
State Management: The component uses React's useState hook to manage the current Pokémon number and the corresponding image URL.
Random Number Generation: When the button is clicked, a new random number between 1 and 151 is generated to select a different Pokémon.
Dynamic URL: The URL for the Pokémon image is dynamically constructed based on the current Pokémon number.
