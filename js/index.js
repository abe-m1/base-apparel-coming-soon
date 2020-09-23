const submitButton = document.querySelector('#button-submit');
const input = document.querySelector('#input');
const errorMessage = document.querySelector('.error-message');
const errorCircle = document.querySelector('.error-circle');
const form = document.querySelector('#form');

function validate(e) {
  e.preventDefault();
  const regEx = /^.+@\w+\.\w+$/;
  console.log(input.value);
  if (regEx.test(String(input.value).toLowerCase())) {
    console.log('valid');
    errorCircle.style.display = 'none';
    form.classList.remove('form-error');
    errorMessage.style.display = 'none';
  } else {
    errorCircle.style.display = 'block';
    errorMessage.style.display = 'block';
    form.classList.add('form-error');
  }
}

submitButton.addEventListener('click', validate);
