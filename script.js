console.log('hello');

const onShowAll = (e) => {
  e.preventDefault();
  console.log('hello');
  $('.even').show();
  $('.odd').show();
};

const onShowEven = (e) => {
  e.preventDefault();
  console.log('evev');
  $('.even').show();
  $('.odd').hide();
};

const onShowOdd = (e) => {
  e.preventDefault();
  console.log('odd');
  $('.even').hide();
  $('.odd').show();
};

const addHandlers = () => {
  $('.show-all').on('click', onShowAll);
  $('.show-even').on('click', onShowEven);
  $('.show-odd').on('click', onShowOdd);
};
