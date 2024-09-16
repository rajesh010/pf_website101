import { html, css, LitElement } from 'lit';

// maybe also add a selected or something && maybe opt to not close??
export class MgFloatingList extends LitElement {
    static get properties() {
        return {
            options: { type: Array },  // List of options, can be an array of strings or objects
            showValues: { type: Boolean },  // Boolean to determine whether to show values
            value: { type: String },  // Selected value
        };
    }

    static styles = css`
        :host {
            --floating-list-bg-color: var(--primary-bg-color, #121212);  /* Dark background */
            --floating-list-text-color: var(--primary-text-color, #FFFFFF);  /* White text */
            --floating-list-hover-bg-color: var(--primary-hover-bg-color, #00FF00);  /* Neon green on hover */
            --floating-list-selected-bg-color: var(--primary-selected-bg-color, #FF5733);  /* Orange for selected item */
            --floating-list-border-color: var(--primary-border-color, #00FF00);  /* Neon green border */
            --floating-list-padding: var(--primary-padding, 10px);  /* Default padding */
            --floating-list-width: var(--list-container-width, 200px);  /* Default width */

            display: flex;
            /* here would be chance to put anywhere .... left (ltr) being the default */
            justify-content: flex-start;
            z-index: 999;
            padding-right: 0.8em;
            background-color:red;
        }

        .floating-list-container {
            display: flex;
            flex-direction: column;
            background-color: var(--floating-list-bg-color);
            /* border: 1px solid var(--floating-list-border-color); */
            border: 3px solid var(--floating-list-border-color);
            width: var(--floating-list-width);
            border-radius: 5px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }

        .floating-list-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--floating-list-padding);
            color: var(--floating-list-text-color);
            font-family: var(--primary-font-family, 'Lato', sans-serif);
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
        }

        .floating-list-item:hover {
            background-color: var(--floating-list-hover-bg-color);
            color: var(--primary-hover-text-color, #121212);
        }

        .floating-list-item.selected {
            background-color: var(--floating-list-selected-bg-color);
        }

        .list-name {
            font-weight: bold;
        }

        .list-value {
            font-size: 0.9em;
            opacity: 0.7;
        }
    `;

    constructor() {
        super();
        this.options = [];
        this.showValues = false;
        this.value = '';
    }

    render() {
        const isSelected = (opt) => {
            return (typeof opt === 'object' ? this.value === opt.value : this.value === opt) ? 'selected' : '';
        };

        return html`
            <div class="floating-list-container">
                ${this.options.map(opt => html`
                    <div 
                        class="floating-list-item ${isSelected(opt)}"
                        @click=${e => {
                            this.value = typeof opt === 'object' ? opt.value : opt;
                            e.stopPropagation();
                            this.dispatchEvent(new CustomEvent("item-click", {
                                bubbles: true,
                                composed: true,
                                detail: { value: this.value }
                            }));
                        }}
                    >
                        <div class="list-name">
                            ${typeof opt === 'object' ? opt.name : opt}
                        </div>
                        <div class="list-value">
                            ${typeof opt === 'object' && this.showValues ? opt.value : ''}
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define("mg-floating-list", MgFloatingList);
