function convertPokemonTypesToList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHTML(pokemon) {
    return `

    <li class="pokemon">
          <span class="number">#${pokemon.id}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToList(pokemon.types).join('')}
            </ol>

            <img
              src="${pokemon.sprites.other.dream_world.front_default}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
})