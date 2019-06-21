import css from '../helpers/css';

customElements.define(
  'my-greeting',
  class extends HTMLElement {
    #template = document.createElement('template');
    #sheet = new CSSStyleSheet();
    #message = 'Hello friend!';

    #getGreeting() {
      return this.#message;
    }

    constructor() {
      super();

      this.#template.innerHTML = `
        <p>${this.#getGreeting()}</p>
      `;
      this.#sheet.replaceSync(css`
        p {
          color: blue;
        }
      `);
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.#template.content.cloneNode(true));
      this.shadowRoot.adoptedStyleSheets = [this.#sheet];
    }
  },
);
