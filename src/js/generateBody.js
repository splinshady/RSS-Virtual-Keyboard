const generateBody = () => {
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = '';

  const header = document.createElement('header');
  header.className = 'container';
  header.innerHTML = '<h1 class="header-title">RSS Virtual Keyboard</h1>';

  const main = document.createElement('main');
  const section = document.createElement('section');
  section.className = 'container';
  section.innerHTML = '<textarea readonly class="textarea" name="textarea"></textarea><div class="keyboard"></div>';
  main.append(section);

  const footer = document.createElement('footer');
  footer.className = 'container';
  footer.innerHTML = '<p class="description">Клавиатура создана в операционной системе MacOS</p><p class="description">Для переключения языка комбинация: Option(Alt) + Space</p>';

  body.append(header, main, footer);
};

export default generateBody;
