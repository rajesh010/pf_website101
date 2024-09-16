import { LitElement, html, css } from "lit";

export class Footer extends LitElement {

  static get properties() {
    return {
      main_highlight: { type: String },
      description: { type: String },
      icon_lists: { type: Array },
      copyright_text: { type: String },
      date_cp: { type: String },
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --footer-background: #121212; /* Dark background for footer */
      --footer-text-color: #ffffff; /* White text color */
      --footer-heading-color: #00ff00; /* Neon green for headings */
      --footer-border-color: #3498db; /* Blue for borders and accents */
      --footer-font-family: "Lato", sans-serif;
      --footer-heading-font-family: "Orbitron", sans-serif;
      
    }

    .footer-container {
      background-color: var(--footer-background);
      color: var(--footer-text-color);
      padding: var(--footer-padding);
      font-family: var(--footer-font-family);
      border-top: 2px solid var(--footer-border-color);
      text-align: center;
      width: 100%;
      padding-bottom: 20px;
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px; /* Adds space between content blocks */
    }

    .text-block {
      margin: auto;
      max-width: 100%;
      padding: 0 10px; /* Ensure padding on smaller screens */
    }

    .footer-heading {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--footer-heading-color);
      font-family: var(--footer-heading-font-family);
      margin-bottom: 10px;
    }

    .footer-description {
      font-size: 1rem;
      padding: 0.8rem;
      color: var(--footer-text-color);
      line-height: 1.5;
    }

    .social-block {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap; /* Allow social icons to wrap on smaller screens */
    }

    .social-icon {
      background-color: var(--footer-border-color);
      color: var(--footer-text-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
      font-family: var(--footer-heading-font-family);
      padding: 0.5rem;
      border-radius: 50%; /* Rounded icons */
    }

    .social-icon:hover {
      background-color: var(--footer-heading-color);
      transform: scale(1.1);
    }

    .copyright-block {
      font-size: 0.9rem;
      color: var(--footer-text-color);
      margin-top: 20px;
    }

    /* Tablet and Mobile responsiveness */
    @media (max-width: 768px) {
      .footer-content {
        gap: 15px; /* Adjust spacing for tablets */
      }
      .social-icon {
        font-size: 0.9rem; /* Slightly smaller icons */
        padding: 0.4rem;
      }
      .text-block {
        padding: 0 5px;
      }
    }

    @media (max-width: 480px) {
      .footer-heading {
        font-size: 1.3rem; /* Adjust font size for smaller screens */
      }
      .footer-description {
        font-size: 0.9rem; /* Adjust font size for smaller screens */
      }
      .social-icon {
        font-size: 0.8rem; /* Even smaller icons */
        padding: 0.3rem;
      }
      .text-block {
        padding: 0 2px;
      }
    }
  `;

  render() {
    const icon_lists_var = this.icon_lists?.map(icon =>{
      return ({
      ...icon,
      callback_fn: icon.callback_fn.bind(this),
    })
  });

    return html`
      <div class="footer-container">
        <div class="footer-content">
          <div class="text-block">
            <div class="footer-heading">${this.main_highlight}</div>
            <div class="footer-description">${this.description}</div>
          </div>
          <div class="social-block">
            ${icon_lists_var.map((icon) => {
              return html`
                <mg-fa-icon
                  class="social-icon"
                  .icon_name=${icon?.icon_name}
                  .icon_variant=${icon?.icon_variant}
                  @click=${e=> icon?.callback_fn(e)}
                ></mg-fa-icon>
              `;
            })}
          </div>
        </div>
        <div class="copyright-block">
          © ${this.date_cp} ${this.copyright_text}
        </div>
      </div>
    `;
  }
}

customElements.define("mg-footer", Footer);
