const email = document.querySelector('#email');
const form = document.querySelector('#contact-form');
const error = document.querySelector('#error');

const checkName = () => {
  if (email.validity.patternMismatch) {
    error.textContent = 'The content of the email field has to be in lower case';
  } else {
    error.textContent = '';
  }
  return email.validity.patternMismatch;
};

form.addEventListener('submit', (event) => {
  const isNameInValid = checkName();
  if (isNameInValid) event.preventDefault();
});