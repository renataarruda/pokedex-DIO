const pokemonList = document.getElementById('pokemonList')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToHTML(pokemon) {
    return `

    <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img
              src="${pokemon.picture}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
})