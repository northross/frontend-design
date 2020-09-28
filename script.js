'use strict';

// Show All Boxes
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

// Show Even Boxes
const onShowEven = (e) => {
  e.preventDefault();
  // EVEN
  $('.even').show();
  $('.show-even').removeClass('btn');
  $('.show-even').addClass('select');
  // ODD
  $('.odd').hide();
  $('.show-odd').removeClass('select');
  $('.show-odd').addClass('btn');
  // ALL
  $('.show-all').removeClass('select');
  $('.show-all').addClass('btn');
};

// Show Odd Boxes
const onShowOdd = (e) => {
  e.preventDefault();
  // ODD
  $('.odd').show();
  $('.show-odd').removeClass('btn');
  $('.show-odd').addClass('select');
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
  // Show Click Events
  $('.show-all').on('click', onShowAll);
  $('.show-even').on('click', onShowEven);
  $('.show-odd').on('click', onShowOdd);
  // Show Odd and Even Divs
  $('.show-even').show();
  $('.show-odd').show();
  // Show All btn on Select
  $('.show-all').removeClass('btn');
  $('.show-all').addClass('select');

  // Hamburger screen toggle
  $('.hamburger').click(function () {
    $('.nav-links').toggleClass('open');
  });
});
