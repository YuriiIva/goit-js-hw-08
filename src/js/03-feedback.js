// import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
const dataSet = {};

const handleTextInput = e => {
  if (e.target.name == refs.email.name) {
    dataSet.email = e.target.value;
    console.log(refs.email.value);
  }
  if (e.target.name == refs.message.name) {
    dataSet.message = e.target.value;
  }

  const inputJSON = JSON.stringify(dataSet);

  localStorage.setItem(STORAGE_KEY, inputJSON);
  //   console.log(dataSet);
};

const handleFormSubmit = e => {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
};

populateText();

function populateText() {
  const savedMessadge = localStorage.getItem(STORAGE_KEY);
  console.log(savedMessadge);
  if (savedMessadge) {
    refs.email.value = 5;
    refs.message.value = 25;
  }
}

refs.form.addEventListener('submit', handleFormSubmit);
// refs.form.addEventListener('input', throttle(handleTextInput, 500));
refs.form.addEventListener('input', handleTextInput);
