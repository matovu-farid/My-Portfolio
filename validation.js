const email = document.querySelector('#email');
const form = document.querySelector('#contact-form');
const error = document.querySelector('#error');

const checkName = () => {
  if (email.validity.patternMismatch) error.textContent = 'The content of the email field has to be in lower case and the form is not submited';

  return email.validity.patternMismatch;
};

const isEmailInvalid = () => {
  if (email.validity.typeMismatch) error.textContent = 'Please input a valid email and the form is not submited';
  return email.validity.typeMismatch;
};

form.addEventListener('submit', (event) => {
  const isNameInValid = checkName();
  const isEmailInValid = isEmailInvalid();
  if (isNameInValid && isEmailInValid) error.textContent = 'The content of the email field has to be in lower case and it should be a valid email and the form is not submited';
  if (isNameInValid || isEmailInValid) event.preventDefault();
  else error.textContent = '';
});
