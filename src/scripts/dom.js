import $ from 'jquery';
import axios from 'axios';
import { Pokemon } from './model';

const apiBaseUrl = 'https://pokeapi.co/api/v2';
const pokemonApiUrl = `${apiBaseUrl}/pokemon`;

// OnDomContentLoaded
$(async function () {
  const response = (
    await axios.get(pokemonApiUrl, {
      params: {
        limit: 10,
        offset: 0,
      },
    })
  ).data;

  response.results.forEach((result) => {
    const pokemon = new Pokemon({ ...result }).detail();

    $('<div/>', {
      class: 'poke-container',
      html: `
      <div class="poke-content" data-id="${pokemon.id}">
        <img
          class="poke-img"
          src="${pokemon.sprite_url}" />
        <p class="game">${pokemon.name}</p>
      </div>
      `,
    }).appendTo('#poke-grid');

    // const elem = $('div');
    // elem.addClass('poke-container');
    // elem.innerHTML = `
    // <div class="poke-content" data-id="${pokemon.id}">
    //   <img
    //     class="poke-img"
    //     src="${pokemon.url}" />
    //   <p class="game">${pokemon.name}</p>
    // </div>
    // `;

    // $('#poke-grid').append(elem);
  });
});
