import './sass/style.scss';
import generateBody from './js/generateBody';
import keyCodes from './js/keyCodes';
import renderKeyboard from './js/renderKeyboard';
import pushValue from './js/pushValue';

generateBody();
renderKeyboard(keyCodes);

const textarea = document.querySelector('.textarea');

const arrChars = [];
document.addEventListener('keydown', (event) => {
  const { code } = event;
  arrChars.push(code);

  const article = document.getElementById(code);
  if (code !== 'CapsLock') {
    event.preventDefault();
    article.classList.add('active');
  }

  if (!article.classList.contains('_control')) {
    pushValue(code);
  }

  if (code === 'Enter') {
    textarea.value += '\n';
  }

  if (code === 'Tab') {
    textarea.value += '    ';
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'CapsLock') {
    article.classList.toggle('active');
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'Backspace') {
    const value = textarea.value.toString();
    textarea.value = value.slice(0, -1);
  }
});

document.addEventListener('keyup', (event) => {
  const { code } = event;
  const article = document.getElementById(code);
  if (code !== 'CapsLock') {
    article.classList.remove('active');
  }

  if (arrChars.includes('Space') && (arrChars.includes('AltLeft') || arrChars.includes('AltRight'))) {
    const keysEng = document.querySelectorAll('.key-eng');
    const keysRu = document.querySelectorAll('.key__ru');
    keysEng.forEach((element) => {
      element.classList.toggle('hidden');
    });
    keysRu.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'Space' && arrChars.length === 1) {
    textarea.value += ' ';
  }

  arrChars.length = 0;
});
