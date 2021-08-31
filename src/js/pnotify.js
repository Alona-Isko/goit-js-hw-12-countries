import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

export const PNotifyAlert = () => alert({
  title: 'Alert!',
  text: 'Too many matches found. Please enter a more specific query',
  delay: 2000
});

export const PNotifyError = () => error({
  title: 'Error!',
  text: 'This country does not exist!',
  delay: 2000
});