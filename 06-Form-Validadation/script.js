const form = document.querySelector('.form');

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#password-confirmation');

zipCodeList = {
  brazil: {
    placeholder: '55555-555',
    regex: new RegExp('[0-9]{5}-?[0-9]{3}'), 
  },
  'united-states': {
    placeholder: '55555',
    regex: new RegExp('[0-9]{5}'), 
  },
  argentina: {
    placeholder: '5555',
    regex: new RegExp('[0-9]{4}'), 
  }
} 

email.addEventListener('focusout', () => {
  const errorOutput = email.nextElementSibling;
  errorOutput.innerText = '';
  email.classList.add('user-invalid');
  email.classList.remove('valid');

  if (email.validity.valueMissing) {
    errorOutput.innerText = 'This field must be filled';
  } else if (email.validity.typeMismatch) {
    errorOutput.innerText = 'This field must be a Email';
  } else {
    email.classList.add('valid');
  }
});

password.addEventListener('focusout', () => {
  const errorOutput = password.nextElementSibling;
  errorOutput.innerText = '';
  password.classList.add('user-invalid');
  password.classList.remove('valid');

  if (password.value.length < 5) {
    errorOutput.innerText = 'Password need be at least 6 character long';
  } else {
    email.classList.add('valid');
  }
});

passwordConf.addEventListener('focusout', () => {
  const errorOutput = passwordConf.nextElementSibling;
  errorOutput.innerText = '';
  passwordConf.classList.add('user-invalid'); 
  passwordConf.classList.remove('valid'); 

  if (passwordConf.value !== password.value) {
    errorOutput.innerText = 'Passwords must be matching';
  } else {
    email.classList.add('valid');
  }
});

zipCode.addEventListener('focusout', () => {
  const errorOutput = zipCode.nextElementSibling;
  const selectedZip = zipCodeList[country.value];
  errorOutput.innerText = '';
  zipCode.classList.add('user-invalid'); 
  zipCode.classList.remove('valid'); 

  if (!selectedZip.regex.test(zipCode.value)) {
    errorOutput.innerText = `Zip Code must follow ${selectedZip.placeholder}`;
  } else {
    zipCode.classList.add('valid');
  }
});

country.addEventListener('change', () => {
  const selectedZip = zipCodeList[country.value];
  zipCode.placeholder = selectedZip.placeholder; 
})