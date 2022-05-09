import Key from './generateKey';

const generateArrKey = (data) => {
  const keyArr = [];
  for (const key in data) {
    keyArr.push(new Key(data[key]));
  }
  return keyArr;
};

const renderKeyboard = (data) => {
  const wrapper = document.querySelector('.keyboard');
  wrapper.innerHTML = '';
  const arrOfKey = generateArrKey(data);
  for (let i = 0; i < arrOfKey.length; i += 1) {
    wrapper.append(arrOfKey[i].generateArticle());
  }
};

export default renderKeyboard;
