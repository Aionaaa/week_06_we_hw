document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', createNewPokemon);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const createNewPokemon = function (event) {
  event.preventDefault();
  const pokemonItem = document.createElement('li');
  pokemonItem.classList.add('caught-pokemon');

  const name = document.createElement('h2');
  name.textContent = this.name.value;
  pokemonItem.appendChild(name);

  const level = document.createElement('p');
  level.textContent = this.level.value;
  pokemonItem.appendChild(level);

  const type = document.createElement('h2');
  type.textContent = this.type.value;
  pokemonItem.appendChild(type);

  const pokemonList = document.querySelector('#pokemon-list')
  pokemonList.appendChild(pokemonItem);
  document.getElementById("new-item-form").reset();
}

const handleDeleteAllClick = function (event) {
  const caughtPokemon = document.querySelector('#caught-pokemon');
  caughtPokemon.innerHTML = '';
}
