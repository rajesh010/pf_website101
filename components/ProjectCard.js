import { html, css, LitElement } from 'lit';

export class ProjectCard extends LitElement {
  static styles = css`
    :host {
      display: flex;
      gap: 1rem;
      padding: 20px;
      border: 1px solid var(--border-color, #00FF00);
      border-radius: 10px;
      background-color: var(--primary-bg-color, #121212);
      color: var(--primary-text-color, #FFFFFF);
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s, transform 0.3s;
      min-width: 15rem;
      max-width: 40rem;
    }

    :host(:hover) {
      background-color: var(--hover-bg-color, #1F1F1F);
      border-color: var(--hover-border-color, #00FF00);
      transform: scale(1.02);
    }

    .date-section {
      font-family: var(--primary-font-family, 'Lato', sans-serif);
      color: var(--accent-color, #00FF00);
      font-size: 0.9rem;
    }

    .content-section {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--accent-color, #00FF00);
      font-family: var(--heading-font-family, 'Orbitron', sans-serif);
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 1rem;
      color: var(--secondary-text-color, #CCCCCC);
      font-family: var(--primary-font-family, 'Lato', sans-serif);
      margin-bottom: 1rem;
    }

    .skill-set {
      display: flex;
      gap: 10px;
      flex-wrap: wrap; /* Allow skills to wrap on smaller screens */
    }

    .skill-item {
      border: 1px solid var(--accent-color, #00FF00);
      padding: 0.5rem;
      border-radius: 5px;
      background-color: var(--secondary-bg-color, #1F1F1F);
      color: var(--primary-text-color, #FFFFFF);
      font-family: var(--primary-font-family, 'Lato', sans-serif);
      font-size: 0.85rem;
      text-transform: uppercase;
      transition: background-color 0.3s, color 0.3s;
    }

    .skill-item:hover {
      background-color: var(--accent-color, #00FF00);
      color: var(--primary-bg-color, #121212);
    }

    .img-date-section {
      display: flex;
      flex-direction: column;
    }

    .img-section,
    .date-section {
      width: 7rem;
      min-height: 4rem;
    }

    .img-section {
      border: 1px solid var(--accent-color);
      display:flex;
      justify-content:center;
      align-items:center;
    }

    /* Tablet Version */
    @media (max-width: 768px) {
      :host {
        flex-direction: column;
        padding: 15px;
        max-width: 100%;
      }

      .img-section,
      .date-section {
        width: 100%;
        text-align: center; /* Centering the content for tablets */
      }

      .skill-set {
        gap: 5px;
      }

      .skill-item {
        flex: 1;
        text-align: center; /* Center skill text for smaller devices */
      }
    }

    /* Mobile Version */
    @media (max-width: 480px) {
      :host {
        flex-direction: column;
        padding: 10px;
        gap: 0.5rem;
        max-width: 100%;
      }

      .title {
        font-size: 1.1rem;
      }

      .description {
        font-size: 0.9rem;
      }

      .skill-set {
        flex-direction: column;
        gap: 5px;
      }

      .skill-item {
        width: 100%;
        padding: 0.3rem; /* Smaller padding for mobile */
        text-align: center;
      }

      .img-section {
        width: 100%;
        min-height: 3rem; /* Reduce size on mobile */
      }

      .date-section {
        text-align: center; /* Center date for mobile */
        font-size: 0.8rem;
      }
    }
  `;

  static get properties() {
    return {
      date: { type: String },
      title: { type: String },
      description: { type: String },
      skills: { type: Array },
    };
  }

  render() {
    return html`
      <div class="img-date-section">
        <div class="date-section">
          ${this.date}
        </div>
        <div class="img-section">
          M
        </div>
      </div>
      <div class="content-section">
        <div class="title">${this.title}</div>
        <div class="description">${this.description}</div>
        <div class="skill-set">
          ${this.skills.map(
            (skill) => html`<div class="skill-item">${skill}</div>`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('mg-pro-card', ProjectCard);
