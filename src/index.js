import './sass/main.scss';
import './js/fetchCountries.js';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
 
  defaultModules.set(PNotifyMobile, {});
 
  alert({
    text: 'Notice me, senpai!'
  });

import debounce from 'lodash.debounce';

debounce(test, 2000)
function test () {
  console.log('object')
}


const refs = {
  form: document.querySelector('#form'),
  input: document.querySelector('#search'),
  container: document.querySelector('.container')
}

// function fetchCountries(searchQuery) {
//   return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//     .then(response => response.json())
  
//     .catch(error => console.log(error))
// }

fetch('https://restcountries.eu/rest/v2/all').then(response => {
  return response.json();
}).then(country => {
  console.log(country);
})
  .catch(error => {
    console.log(error);
  });

  
const onSearch = (ev) => {
  ev.preventDefault();
  const value = refs.input.value

  console.log(value);
}

refs.form.addEventListener('submit', onSearch);
