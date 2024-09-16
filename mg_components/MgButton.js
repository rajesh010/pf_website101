import { LitElement, html, css } from 'lit';

export class MgButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      --button-bg-color: var(--primary-bg-color, #121212); /* Default Button Background */
      --button-hover-bg-color: var(--accent-color, #00FF00); /* Background Color on Hover */
      --button-text-color: var(--accent-color, #00FF00); /* Default Button Text Color */
      --button-hover-text-color: var(--primary-bg-color, #121212); /* Text Color on Hover */
      --button-border-color: var(--accent-color, #00FF00); /* Default Border Color */
      --button-hover-border-color: var(--secondary-text-color, #CCCCCC); /* Border Color on Hover */
      --button-padding: 10px; /* Button Padding */
      --button-border-radius: 5px; /* Button Border Radius */
      --button-font-family: var(--primary-font-family, 'Lato', sans-serif); /* Button Font Family */
      --button-font-weight: bold; /* Button Font Weight */
      --button-transition: background-color 0.3s, color 0.3s, border 0.3s, transform 0.3s; /* Smooth Transition */
    }

    button {
      background-color: var(--button-bg-color);
      color: var(--button-text-color);
      border: 1px solid var(--button-border-color);
      padding: var(--button-padding);
      border-radius: var(--button-border-radius);
      font-family: var(--button-font-family);
      font-weight: var(--button-font-weight);
      cursor: pointer;
      transition: var(--button-transition);
    }

    button:hover {
      background-color: var(--button-hover-bg-color);
      color: var(--button-hover-text-color);
      border-color: var(--button-hover-border-color);
      transform: scale(1.05); /* Slightly enlarge on hover */
    }

    button:active {
      transform: scale(0.95); /* Slightly shrink on click */
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("mg-button", MgButton);
