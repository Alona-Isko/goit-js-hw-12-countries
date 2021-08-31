import './sass/main.scss';
import API from './js/fetchCountries.js';
import getRefs from './js/get-refs';

import { PNotifyAlert, PNotifyError } from './js/pnotify.js';
import debounce from 'lodash.debounce';


const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();
  const searchQuery = e.target.value;
  if (searchQuery.length > 0) {
    clearSearch();
    clearList();

    API.fetchCountries(searchQuery).then(data => {      
      
      if (data.length > 10) {
        PNotifyAlert();
      }
      
      else if (data.length >= 2) {
        data.forEach(country => {
          refs.list.insertAdjacentHTML('beforeend', `<li>${country.name}</li>`)
        });
        
        refs.list.addEventListener('click', el => {
          
          const country = data.find(country => {
            return country.name === el.target.textContent
          })
          // clearSearch();
          clearList();
          createCountryCard(country);
        })
      }

      else if (data.length === 1) {
        renderCountriesList(data);
      }
      else PNotifyError();

    })
      .catch(() => { console.log("Houston! We have a problem!");});
  }
}


function createCountryCard(country) {
    const article = `<div class="country">
              <div class="country__name">
                  <h1 class="country__name"> ${country.name}</h1>
              </div>
                  <div class="country__content">
                      <p class="country__descr">
                          <span class="descr">Capital:</span> ${country.capital}</p>
                      <p class="country__descr">
                          <span class="descr">Population:</span> ${country.population}</p>
                      <div class="lang-list">
                          <p class="country__descr">
                              <span class="descr">Languages:</span> ${languagesList(country.languages)}</p>
                      </div>
                  </div>
              <div class="country__flag">
                  <img src="${country.flag}" alt="${country.name}" width="200">
              </div>
          </div>
        `
  refs.container.insertAdjacentHTML('beforeend', article)
}

const languagesList = (ar) => ar.map(lang => " " + lang.name);


function renderCountriesList(arr) {
  arr.forEach(el => createCountryCard(el));
}

function clearList() {
  refs.container.innerHTML = '';
}

function clearSearch() {
  refs.list.innerHTML = '';
}
