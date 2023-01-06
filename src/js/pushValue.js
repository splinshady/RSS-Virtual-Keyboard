const pushValue = (keyCode) => {
  const key = document.getElementById(keyCode);
  const textarea = document.querySelector('.textarea');
  let value = '';
  key.childNodes.forEach((element) => {
    if (element.classList && !element.classList.contains('hidden')) {
      element.childNodes.forEach((e) => {
        if (e.classList && !e.classList.contains('hidden')) {
          value = e.textContent;
        }
      });
    }
  });
  textarea.value += value;
};

export default pushValue;
