import css from '../helpers/css';

export class MyCustomElement extends HTMLElement {
  template = document.querySelector('#my-custom-element');
  sheet = new CSSStyleSheet();

  constructor() {
    super();

    this.sheet.replaceSync(css`
      ::slotted(h1) {
        color: red;
      }

      p {
        font-size: 1.4rem;
        color: blue;

        & span {
          color: green;
        }
      }
    `);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(document.importNode(this.template.content, true));
    this.shadowRoot.adoptedStyleSheets = [this.sheet];
  }
}

customElements.define('my-custom-element', MyCustomElement);
