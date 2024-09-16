import { html, css, LitElement } from 'lit';


export class ContactForm extends LitElement {
    static styles = css`
        :host {
            /* display: block; */
            --form-background: var(--primary-bg-color, #121212); /* Dark Charcoal */
            --form-text-color: var(--primary-text-color, #FFFFFF); /* White */
            --form-input-background: var(--secondary-bg-color, #1F1F1F); /* Slightly lighter dark */
            --form-input-text-color: var(--primary-text-color, #FFFFFF); /* White */
            --form-border-color: var(--accent-color, #00FF00); /* Neon Green */
            --form-padding: var(--primary-padding, 20px);
            --form-margin: var(--primary-margin, 20px);
            --form-border-radius: var(--primary-border-radius, 8px);
            --form-font-family: var(--primary-font-family, 'Lato', sans-serif);
            --form-heading-font-family: var(--heading-font-family, 'Orbitron', sans-serif);
            --form-box-shadow: var(--primary-box-shadow, 0 8px 16px rgba(0, 0, 0, 0.2));
            --form-hover-box-shadow: var(--primary-hover-box-shadow, 0 16px 32px rgba(0, 0, 0, 0.3));

            }

        
        .contact-container {
            border-radius: var(--form-border-radius);
            background-color: var(--form-background);
            color: var(--form-text-color);
            font-family: var(--form-font-family);
            box-shadow: var(--form-box-shadow);
            transition: box-shadow 0.3s ease-in-out;
            height:100%;
            margin:0px;
            padding:20px;
        }

        .contact-container:hover {
            box-shadow: var(--form-hover-box-shadow);
        }

        .contact-header {
            text-align: center;
            margin-bottom: 1rem;
        }

        .contact-header h2 {
            font-family: var(--form-heading-font-family);
            /* color: var(--form-text-color); */
            color: #00FF00;
            margin: 1rem;
        }

        .contact-header h5 {
            /* color: var(--form-text-color); */
            color: #00FF00;
            margin: 0;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-label {
            font-family: var(--form-heading-font-family);
            color: var(--form-text-color);
            margin-bottom: 0.5rem;
            display: block;
        }

        input, textarea {
            width: 100%;
            background-color: var(--form-input-background);
            color: var(--form-input-text-color);
            border: 2px solid var(--form-border-color);
            border-radius: var(--form-border-radius);
            padding: 0.8rem;
            margin-top: 0.5rem;
            box-sizing: border-box;
            font-family: var(--form-font-family);
            font-size: 1rem;
        }

        .submit-button {
            text-align: right;
        }
    `;

    static get properties() {
        return {
            scroll_into_view: { type: String },
            name: { type: String },
            email: { type: String },
            message: { type: String }
        };
    }

    render() {
        const scrollIntoView = () => {
            if (this.scroll_into_view === 'contact') {
                const el = this.shadowRoot.querySelector('.contact-container');
                el?.scrollIntoView();
            }
        };

        scrollIntoView();

        return html`
            <div class="contact-container">
                <div class="contact-header">
                    <h2>Contact</h2>
                    <h5>Feel free to message me</h5>
                </div>
                <div class="contact-form">
                    <div class="form-group">
                        <label class="form-label">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            @input=${e => this.name = e.target.value}
                        />
                    </div>

                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            @input=${e => this.email = e.target.value}
                        />
                    </div>

                    <div class="form-group">
                        <label class="form-label">Message</label>
                        <textarea
                            placeholder="Enter Your Message"
                            rows="5"
                            @input=${e => this.message = e.target.value}
                        ></textarea>
                    </div>

                    <div class="submit-button">
                        <mg-button
                            @click=${e => this.dispatchEvent(new CustomEvent('submit', { detail: { name: this.name, email: this.email, message: this.message } }))}
                        >
                            Submit
                        </mg-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-form', ContactForm);
