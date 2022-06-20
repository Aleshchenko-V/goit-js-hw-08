import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formValues = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', setFormFields);
refs.form.addEventListener('input', throttle(onInputHandler, 500));
refs.form.addEventListener('submit', onSubmitHandler);

function onInputHandler(e) {
  formValues[e.target.name] = e.target.value;
  const stringifyData = JSON.stringify(formValues);
  localStorage.setItem(LOCALSTORAGE_KEY, stringifyData);
}

function setFormFields() {
  try {
    const cachedValues = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const { email, message } = cachedValues;
    console.log(email, message);
    refs.input.value = email;
    refs.textarea.value = message;
  } catch (e) {
    refs.input.value = formValues.email;
    refs.textarea.value = formValues.message;
  }
}

function onSubmitHandler(e) {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
  console.log(formValues);
}
