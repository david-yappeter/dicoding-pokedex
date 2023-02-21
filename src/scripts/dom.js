import $ from 'jquery';
import { Pokemon } from './model';
import { EVENT_DATALOADED } from './const';
import { DoLoadData } from './request';

// OnDomContentLoaded
$(async () => {
  $(document).on(EVENT_DATALOADED, (e, datas) => {
    datas.results.forEach((data) => {
      const pokemon = new Pokemon({ ...data }).detail();

      $('<div/>', {
        class: 'poke-container',
        html: `
        <div class="poke-content" data-id="${pokemon.id}" data-content="${pokemon.name}">
          <img
            loading="lazy"
            alt="${pokemon.name}"
            class="poke-img"
            src="${pokemon.sprite_url}" />
        </div>
        `,
      }).appendTo('#poke-grid');
    });
  });

  await DoLoadData();
});
