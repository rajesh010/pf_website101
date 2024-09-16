import { LitElement, html, css } from 'lit';

// {CSS} heavily use one type of shortcut variable naming.... sthg like (mfl-std.-var) 
// make the component itself such that everything including the brand name&/logo; name; and the options can be configurable 
//  make it with even dispatch such that all control lies outside of the component
//  make it as easy as possible to  use and highly highly highly interchangeable


// main objective make everything -- KISS highly modular..... 

export class Navbar extends LitElement {

    static get properties() {
        return {
            options: { type: Object },
            main_name: { type: String },
            brand_img: { type: String },
            // just to have e.target.value; since its standard
            value: { type: String },
        };
    }
    
    static styles = css`
        :host {
            display: block;
            --navbar-background: #121212; /* Dark background for navbar */
            --navbar-text-color: #FFFFFF; /* White text color */
            --navbar-accent-color: #00FF00; /* Neon green for primary text and hover */
            --navbar-border-color: #00FF00; /* Neon green for border */
            --navbar-padding: 10px;
            --navbar-font-family: 'Lato', sans-serif;
            --navbar-heading-font-family: 'Orbitron', sans-serif;
            top:0px;
            position:fixed;
            right:0px;
            z-index:999;
        }

        .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--navbar-background);
            padding: var(--navbar-padding);
            border-bottom: 2px solid var(--navbar-border-color);
            position: sticky;
            top: 0;
            z-index: 1000;
            font-family: var(--navbar-font-family);
        }

        .navbar-brand {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--navbar-text-color);
        }

        .navbar-brand .brand-icon {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--navbar-accent-color);
            font-family: var(--navbar-heading-font-family);
            border: 2px solid var(--navbar-accent-color);
            padding:10px;
            border-radius: 50%
        }

        .navbar-brand .brand-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--navbar-accent-color);
            font-family: var(--navbar-heading-font-family);
        }

        .nav-items {
            display: flex;
            gap: 20px;
        }

        .nav-item {
            /* color: var(--navbar-text-color); */
            color: var(--navbar-accent-color);
            font-size: 1rem;
            cursor: pointer;
            padding: 0.5em;
            transition: color 0.3s, background-color 0.3s;
        }

        .nav-item:hover {
            color: var(--navbar-background);
            background-color: var(--navbar-accent-color);
            border-radius: 10px;
        }

        .mobile-menu-icon {
            display: none;
            color: var(--navbar-text-color);
            font-size: 1.5rem;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .nav-items {
                display: none;
            }

            .mobile-menu-icon {
                display: block;
            }
        }
    `;

    render() {
        this.options = [
            { name: "Home", value: "home" },
            { name: "About", value: "about" },
            { name: "Experience", value: "experience" },
            { name: "Projects", value: "projects" },
            { name: "Contact", value: "contact" },
        ];

        this.main_name = "Mohan Gautam"

        return html`
            <div class="navbar-container">
                <div class="navbar-brand">
                    <div class="brand-icon"
                        @click=${() => this.dispatchEvent(new CustomEvent("main-icon-click", { bubbles: true, composed: true }))}
                    >M</div>
                    <div class="brand-name"
                        @click=${() => this.include_main_name && this.dispatchEvent(new CustomEvent("main-icon-click", { bubbles: true, composed: true }))}
                    >${this.main_name}</div>
                </div>
                <div class="nav-items">
                    ${this.options.map(option => html`
                        <div
                            class="nav-item"
                            @click=${() => {
                            this.value = option.value
                            this.dispatchEvent(new CustomEvent("nav-click", { bubbles: true, composed: true, detail: { value: this.value } }))}
                            }
                        >
                            ${option.name}
                        </div>
                    `)}
                </div>
              
                <div class="mobile-menu-icon">
                <mg-fa-icon 
                    @click=${() => this.dispatchEvent(new CustomEvent("side-icon-click", { bubbles: true, composed: true }))}
                    .icon_name=${"bars"} .icon_variant=${"solid"} >
                </mg-fa-icon>
            </div>
            </div>
        `;
    }
}

customElements.define('mg-navbar', Navbar);
