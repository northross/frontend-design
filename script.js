'use strict';

const onShowAll = (e) => {
  e.preventDefault();
  console.log('here');
  // ALL
  $('.show-all').removeClass('btn');
  $('.show-all').addClass('select');
  // Even
  $('.show-even').removeClass('select');
  $('.show-even').addClass('btn');
  $('.even').show();
  // ODD
  $('.show-odd').removeClass('select');
  $('.show-odd').addClass('btn');
  $('.odd').show();
};

const onShowEven = (e) => {
  e.preventDefault();
  // EVEN
  $('.even').show();
  $('.show-even').removeClass('btn');
  $('.show-even').addClass('select');
  // ODD
  $('.odd').hide();
  $('.show-odd').removeClass('select');
  $('#odd').addClass('btn');
  // ALL
  $('.show-all').removeClass('select');
  $('.show-all').addClass('btn');
};

const onShowOdd = (e) => {
  e.preventDefault();
  // ODD
  $('.odd').show();
  $('.show-odd').removeClass('btn');
  $('#odd').addClass('select');
  // EVEN
  $('.even').hide();
  $('.show-even').removeClass('select');
  $('.show-even').addClass('btn');
  // ALL
  $('.show-all').removeClass('select');
  $('.show-all').addClass('btn');
};

// Event Handlers
$(() => {
  $('.show-even').show();
  $('.show-odd').show();
  $('.show-all').on('click', onShowAll);
  $('.show-even').on('click', onShowEven);
  $('.show-odd').on('click', onShowOdd);
});
