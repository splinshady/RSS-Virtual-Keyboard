/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import './sass/style.scss';
import { keyCodes } from './js/keyCodes';
import { Key } from './js/generateKey';

const generateArrKey = (data) => {
  const keyArr = [];
  for (const key in data) {
    keyArr.push(new Key(data[key]));
  }
  return keyArr;
};

const wrapper = document.querySelector('.keyboard');

const renderKeyboard = () => {
  wrapper.innerHTML = '';
  const arrOfKey = generateArrKey(keyCodes);
  for (let i = 0; i < arrOfKey.length; i += 1) {
    wrapper.append(arrOfKey[i].generateArticle());
  }
};

if (keyCodes) {
  renderKeyboard();
}
