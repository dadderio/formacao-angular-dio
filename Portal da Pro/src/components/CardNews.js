class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    //shadow.innerHTML = '<h1>hello</h1>';
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card__left');

    const autor = document.createElement('span');
    autor.textContent = 'By ' + (this.getAttribute('autor') || ' Anonymous');

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('url');

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('content');

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card__right');
    const newsImage = document.createElement('img');
    newsImage.src = this.getAttribute('photo') || 'assets/foto-default.jpeg';
    newsImage.alt = 'professora preta lecionando para ensino infantil';
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {}
}

customElements.define('card-news', CardNews);
