console.log("Pokemon Project 🚀 ");
const POKEMONS = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const pokemonContainer = document.getElementById('pokemon');

async function fetchPokemons() {
    const pokemons = await fetch(POKEMONS);
    const pokemonData = await pokemons.json();
    const pokemonResults = pokemonData.results;
    for (let i = 0; i < pokemonResults.length; i++) {
        const pokemonNameElement = document.createElement('p');
        pokemonNameElement.textContent = pokemonResults[i].name;
        pokemonContainer?.appendChild(pokemonNameElement);
        const pokemonDetailsResponse = await fetch(pokemonResults[i].url);
        const pokemonDetailsData = await pokemonDetailsResponse.json();
        console.log(pokemonDetailsData);
        const pokemonImage = pokemonDetailsData.sprites.other["official-artwork"].front_default;
        const pokemonImageElement = document.createElement('img');
        pokemonImageElement.src = pokemonImage;
        pokemonContainer?.appendChild(pokemonImageElement);
    }

    // DOM usage to show the name of the pokemons



}
function main() {
    fetchPokemons();
}

document.addEventListener('DOMContentLoaded', main);