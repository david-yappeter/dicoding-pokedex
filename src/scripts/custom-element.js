const { Pokemon } = require('./model');

class PokeBox extends HTMLElement {
  set pokemon(pokemon) {
    if (pokemon instanceof Pokemon) {
      this._pokemon = pokemon;
    } else {
      this._pokemon = new Pokemon(pokemon);
    }
    this.render();
  }

  render() {
    const pokemon = this._pokemon.detail();

    // this.classList.add('poke-container');
    this.innerHTML = `
    <div class="poke-content" data-id="${pokemon.id}" data-content="${pokemon.name}">
      <img
        loading="lazy"
        alt="${pokemon.name}"
        class="poke-img"
        src="${pokemon.sprite_url}" />
    </div>
    `;
  }
}

customElements.define('poke-box', PokeBox);
