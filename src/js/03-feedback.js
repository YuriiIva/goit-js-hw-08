const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
const dataSet = {};

const handleTextInput = e => {
  //   const message = e.tareget.message.value;
  //   const email = e.target.email.value;
  //   dataSet[email] = message;
  //   localStorage.setItem('feedback-form-state', dataSet);
  console.log(e.tareget);
  //   console.log(dataSet);
};

const handleFormSubmit = e => {
  e.preventDefault();
};

refs.form.addEventListener('submit', handleFormSubmit);
refs.form.addEventListener('input', handleTextInput);
// refs.email.addEventListener('input', handleTextInput);
