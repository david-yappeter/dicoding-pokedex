import $ from 'jquery';
import './custom-element.js';
import { Pokemon } from './model';
import { EVENT_DATALOADED } from './const';
import { DoLoadData } from './request';

// OnDomContentLoaded
$(async () => {
  $(document).on(EVENT_DATALOADED, async (e, datas) => {
    datas.results.forEach((data) => {
      const pokemon = new Pokemon({ ...data }).detail();

      const pokeBox = document.createElement('poke-box');
      pokeBox.pokemon = pokemon;

      $(pokeBox).appendTo('#poke-grid');
    });

    await loadPagination(datas.count);
  });

  await onInitialize();
});

const onInitialize = async () => {
  await DoLoadData();
};

let currentPage;
const loadPagination = async (itemCount) => {
  const paginationLimit = 24;
  const maxVisiblePage = 3;
  const halfMaxVisiblePage = Math.floor(maxVisiblePage / 2);
  const totalPages = Math.ceil(itemCount / paginationLimit);
  const currentPage =
    parseInt(new URLSearchParams(window.location.search).get('page')) || 1;

  const startPage = Math.max(currentPage - halfMaxVisiblePage, 1);
  const endPage = Math.min(currentPage + halfMaxVisiblePage, totalPages);

  const pages = [];

  if (startPage !== 1) {
    pages.push(1);
  }

  if (startPage > 2) {
    pages.push('...');
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push('...');
  }

  if (endPage !== totalPages) {
    pages.push(totalPages);
  }

  const buttons = pages.map((page) => {
    if (page === '...') {
      return '<span class="disabled">...</span>';
    }
    if (page === currentPage) {
      return `<a href="?page=${page}" class="active">
      <p class="game">${page}</p>
      </a>`;
    }
    return `<a href="?page=${page}">
    <p class="game">${page}</p>
  </a>`;
  });

  $('#pagination').html(buttons.join(''));
};
