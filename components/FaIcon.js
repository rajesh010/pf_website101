import { LitElement, html, css } from 'lit';

const FA_PREFIX = "fa-";

export class FaIcon extends LitElement {
    static styles = css`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            --icon-size: 15px;
            --icon-color: var(--accent-color, #00FF00); /* Neon Green */
            --icon-hover-color: var(--primary-bg-color, #121212); /* Dark Charcoal */
            --icon-border: 1px solid var(--accent-color, #00FF00); /* Neon Green */
            --icon-border-hover: 1px solid var(--secondary-text-color, #CCCCCC); /* Light Gray */
            --icon-padding: var(--button-padding, 10px); /* Padding to match button */
            --icon-border-radius: var(--button-border-radius, 5px); /* Match button border radius */
            --icon-background: var(--primary-bg-color, #121212); /* Dark Charcoal Background */
            --icon-background-hover: var(--accent-color, #00FF00); /* Neon Green Background on Hover */
            --icon-transition: background-color 0.3s, color 0.3s, border-color 0.3s, transform 0.3s; /* Smooth Transition */
        }

        .icon-container {
            padding: var(--icon-padding);
            border: var(--icon-border);
            border-radius: var(--icon-border-radius);
            background-color: var(--icon-background);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--icon-transition);
        }

        .icon-container:hover {
            background-color: var(--icon-background-hover);
            border-color: var(--icon-border-hover);
        }

        i {
            font-size: var(--icon-size);
            color: var(--icon-color);
            transition: color 0.3s;
        }

        .icon-container:hover i {
            color: var(--icon-hover-color);
        }
    `;

    static properties = {
        icon_name: { type: String },
        icon_variant: { type: String },
    };

    constructor() {
        super();
        this.icon_name = '';
        this.icon_variant = 'fa-solid'; 
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (this.icon_name && !this.icon_name.startsWith(FA_PREFIX)) {
            this.icon_name = `${FA_PREFIX}${this.icon_name}`;
        }
        if (this.icon_variant && !this.icon_variant.startsWith(FA_PREFIX)) {
            this.icon_variant = `${FA_PREFIX}${this.icon_variant}`;
        }
    }

    render() { 

        if (!this.icon_name) return html``;

        return html`
            <!-- <style>
                @import url('/librarys/fontawesome/fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/fontawesome.css');
                @import url('/librarys/fontawesome/fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/brands.css');
                @import url('/librarys/fontawesome/fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/solid.css');
            </style> -->
            <div class="icon-container">
                <i class="${this.icon_variant} ${this.icon_name}"></i>
            </div>
        `;
    }
}

customElements.define('mg-fa-icon', FaIcon);
