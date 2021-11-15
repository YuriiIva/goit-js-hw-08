import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

let dataSet = {};

const handleTextInput = e => {
  const input = e.target;
  dataSet[input.name] = input.value;
  //   dataSet = {
  //     ...dataSet,
  //     [name]: value,
  //   };

  const inputJSON = JSON.stringify(dataSet);
  localStorage.setItem(STORAGE_KEY, inputJSON);
};

const handleFormSubmit = e => {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
};

populateText();

function populateText() {
  const savedMessadge = localStorage.getItem(STORAGE_KEY);

  if (savedMessadge) {
    const newDataSet = JSON.parse(savedMessadge);
    formRef.elements.email.value = newDataSet.email ?? '';
    formRef.elements.message.value = newDataSet.message ?? '';
  }
}

formRef.addEventListener('submit', handleFormSubmit);
formRef.addEventListener('input', throttle(handleTextInput, 500));
