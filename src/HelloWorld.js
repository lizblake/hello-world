import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  __deincrement() {
    if(this.counter > 0) {
      this.counter -= 1;
    }
  }


  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__deincrement}>deincrement</button>
      <input type="number" value="${this.counter}">
    `;

  }
}

