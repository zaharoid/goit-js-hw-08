import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const FEEDBACK_DATA = 'feedback-form-state';
const formData = {};

populateFormEl();

refs.form.addEventListener('input', throttle(OnActiveElementsOfForm, 500));
refs.form.addEventListener('submit', onFormSubmit);

function OnActiveElementsOfForm(e) {
  const name = e.target.name;
  const value = e.target.value;

  formData[name] = value;
  localStorage.setItem(FEEDBACK_DATA, JSON.stringify(formData));
}

function populateFormEl() {
  const parsedFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA));

  if (!parsedFormData) {
    return;
  }

  if (parsedFormData.email) {
    refs.email.value = parsedFormData.email;
  }

  if (parsedFormData.message) {
    refs.message.value = parsedFormData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const parsedFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA));

  if (parsedFormData) {
    console.log(parsedFormData);
  }

  e.target.reset();

  localStorage.removeItem(FEEDBACK_DATA);
}
