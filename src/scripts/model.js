const spriteBaseUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokemon {
  constructor({ name, url }) {
    const id = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    this._id = id;
    this._name = name;
    this._url = url;
  }

  detail() {
    return {
      id: this._id,
      name: this._name,
      url: this._url,
      sprite_url: `${spriteBaseUrl}${this._id}.png`,
    };
  }
}

module.exports = {
  Pokemon,
};
