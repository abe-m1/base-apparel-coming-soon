const submitButton = document.querySelector('#button-submit');
const input = document.querySelector('#input');
const errorMessage = document.querySelector('.error-message');
const errorCircle = document.querySelector('.error-circle');
const form = document.querySelector('#form');

function validate(e) {
  e.preventDefault();
  console.log('validate');
  // const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regEx = /^.+@\w+\.\w+$/;
  console.log(input.value);
  if (regEx.test(String(input.value).toLowerCase())) {
    console.log('valid');
    errorCircle.style.display = 'none';
    form.classList.remove('form-error');
    errorMessage.style.display = 'none';
  } else {
    console.log('not valid', form);
    errorCircle.style.display = 'block';
    errorMessage.style.display = 'block';
    form.classList.add('form-error');
  }
}

submitButton.addEventListener('click', validate);
