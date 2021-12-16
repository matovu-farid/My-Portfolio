const saveFormData = () => {
  const form = document.querySelector('#contact-form');
  const formData = new FormData(form);
  const object = {};
  Array.from(formData.entries()).forEach((entry) => {
    object[entry[0]] = entry[1];
  });

  window.localStorage.setItem('form-storage', JSON.stringify(object));
};
const attachListener = (input) => {
  input.addEventListener('input', saveFormData);
};

const getFormData = (input) => {
  const dataInfo = window.localStorage.getItem('form-storage');
  const data = JSON.parse(dataInfo);
  const inputName = input.getAttribute('name');
  input.value = data[inputName];
};

const onLoad = () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => {
    getFormData(input);
  });
};

onLoad();

const onInput = () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(attachListener);
};
onInput();
