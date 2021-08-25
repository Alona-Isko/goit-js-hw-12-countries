import './sass/main.scss';

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