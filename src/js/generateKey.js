class Key {
  constructor({
    code,
    descriptionEng = null,
    descriptionEngCups = null,
    descriptionRu = null,
    descriptionRuCups = null,
    description = null,
  }) {
    this.id = code;
    this.descriptionEng = descriptionEng;
    this.descriptionEngCups = descriptionEngCups;
    this.descriptionRu = descriptionRu;
    this.descriptionRuCups = descriptionRuCups;
    this.description = description;
  }

  generateArticle() {
    let template = '';
    const article = document.createElement('article');
    article.className = 'key';
    article.id = this.id;

    if (this.descriptionEng) {
      let hidden = '';
      if (this.id.substr(0, 3) === 'Key') {
        hidden += ' hidden';
        template += `<span class="key-eng">
                       <span class="key-eng__lower char">${this.descriptionEng}</span>
                       <span class="key-eng__upper${hidden} char">${this.descriptionEngCups}</span>
                     </span>
                     <span class="key__ru hidden">
                       <span class="key-ru__lower char">${this.descriptionRu}</span>
                       <span class="key-ru__upper${hidden} char">${this.descriptionRuCups}</span>
                     </span>`;
      } else {
        hidden += ' hidden';
        template += `<span class="key-eng">
                        <span class="key-eng__lower char">${this.descriptionEng}</span>
                        <span class="key-eng__upper${hidden} char">${this.descriptionEngCups}</span>
                     </span>
                     <span class="key__ru hidden">
                        <span class="key-ru__lower char">${this.descriptionRu}</span>
                        <span class="key-ru__upper${hidden} char">${this.descriptionRuCups}</span>
                     </span>`;
      }
    }

    if (this.id === 'ArrowUp') {
      const div = document.createElement('div');
      div.className = 'arrow-middle';
      div.innerHTML = '<article class="arrow arrow-up" id="ArrowUp"><span></span></article><article class="arrow arrow-down" id="ArrowDown"><span></span></article>';
      return div;
    }

    if (this.description || this.description === '') {
      let classControl = ' _control';
      switch (this.id) {
        case 'Backspace':
          classControl += ' tab_backspace';
          break;

        case 'Tab':
          classControl += ' tab_backspace';
          break;

        case 'CapsLock':
          classControl += ' caps_enter';
          break;

        case 'Enter':
          classControl += ' caps_enter';
          break;

        case 'ShiftLeft':
          classControl += ' _shift';
          break;

        case 'ShiftRight':
          classControl += ' _shift';
          break;

        case 'MetaRight':
          classControl += ' _command';
          break;

        case 'MetaLeft':
          classControl += ' _command';
          break;

        case 'Space':
          classControl += ' _space';
          break;

        default:
          break;
      }
      article.className += classControl;
      template += `${this.description}`;
    }

    article.innerHTML = template;

    article.addEventListener('mousedown', (event) => {
      const { target } = event;
      let value = '';
      value = target.innerHTML;
      article.classList.toggle('active');

      const textarea = document.querySelector('.textarea');
      textarea.value += value;
    });

    article.addEventListener('mouseup', () => {
      article.classList.toggle('active');
    });

    return article;
  }
}

export default Key;
