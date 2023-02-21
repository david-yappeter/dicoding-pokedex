const $ = require('jquery');
const axios = require('axios');
const { EVENT_DATALOADED } = require('./const');

const apiBaseUrl = 'https://pokeapi.co/api/v2';
const pokemonApiUrl = `${apiBaseUrl}/pokemon`;

async function DoLoadData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const limit = 32;

    const response = (
      await axios.get(pokemonApiUrl, {
        params: {
          limit: limit,
          offset: ((page || 1) - 1) * limit,
        },
      })
    ).data;

    $(document).trigger(EVENT_DATALOADED, [response]);
  } catch (e) {
    console.log('API ERROR: ', e);
  }
}

module.exports = {
  DoLoadData,
};
