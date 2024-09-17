import { LitElement, html, css } from 'lit';
import './ProjectCard.js';
import './ContactForm.js';

export class Content extends LitElement {
    static get properties() {
        return {
            projects: { type: Array },
            scroll_into_view: { type: String },

        };
    }

    static styles = css`
        :host {
            display: block;
            --primary-bg-color: #121212;
            --secondary-bg-color: #1F1F1F;
            --primary-text-color: #FFFFFF;
            --secondary-text-color: #CCCCCC;
            --accent-color: #00FF00;
            --border-color: #00FF00;
            --primary-font-family: 'Lato', sans-serif;
            --heading-font-family: 'Orbitron', sans-serif;
            /* width:100vw; */
        }

        .main-section {
            background-color: var(--primary-bg-color);
            color: var(--primary-text-color);
            font-family: var(--primary-font-family);
            /* width:fit-content */
        }

        .section {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            border-bottom: 2px solid var(--border-color);
            /* padding:20px; */
            
        }

        .experience {
            background-color: var(--secondary-bg-color);
        }

        .name-block, .desc {
            margin: 15px;
            max-width: 70vw;
            text-align: center;
            font-family: var(--heading-font-family);
        }

        .name-block {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--accent-color);
        }

        .about-header, .exp-header {
            text-align: center;
            margin: 20px;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: var(--heading-font-family);
            color: var(--accent-color);            
            border-bottom: 1px solid var(--accent-color); 
        }

        .about-subsection {
            padding: 1rem;
            align-self: center;
            color: var(--secondary-text-color);
            font-size: 1rem;
            line-height: 1.5;
            text-align: center;
            font-family: var(--primary-font-family);
        }

        mg-pro-card {
            margin: 15px;
        }

    `;

    render() {

        this.projects=[{
            date : "May 2014 - Present",
            title : "Full Stack Developer, Fischer Teamplan GmbH",
            description : "Build, deployed & maintain various components and full stack solutions to fischer and its clients. ",
            skills : ["lit","Node","Dbs","Docker","Jenkins","nginx"]
        },{
            date : "March 2022 - Feb 2023",
            title : "Software Developer,Bisonaire GmbH",
            description : " Developed Digital KeyBox, KickerTracker app (for ranking players on tischfootball we used to play), & a Document Version tracker App",
            skills : ["React","Node","SQL","Docker"]
        }]

        const scrollIntoView = () => {

            if (this.scroll_into_view) {
                const el = this.shadowRoot.querySelector(`.${this.scroll_into_view}`);
                el?.scrollIntoView();
            }
        };

        scrollIntoView();

        return html`
            <div class="main-section">

                <div class="home section">
                    <div class="name-block">Hey, Welcome... <br> I am Mohan Gautam</div>
                    <mg-button @click=${() => this.scroll_into_view="about" }>About me</mg-button>
                </div>

                <div class="about section">
                    <div class="about-header">About Me</div>
                    <div class="about-subsection desc">
                        Hey, Mohan again. I specialize in turning unconventional ideas into functional code, blending humor and life. 
                        I design, develop and develop web apps mostly... When I'm not coding, you can find me
                        in nature, Netflix & chill, talking about weird conspiracies, or probably drunk.
                    </div>
                    <mg-button @click=${() => {
                        this.dispatchEvent(new CustomEvent("contact-clicked"))
                        this.scroll_into_view="contact"
                        } }>Contact me</mg-button>
                </div>

                <div class="experience section">
                    <div class="exp-header about-header">Experiences</div>
                    ${this.projects.map(el => html`
                        <mg-pro-card 
                            .date=${el?.date} 
                            .title=${el?.title} 
                            .description=${el?.description} 
                            .skills=${el?.skills}>
                        </mg-pro-card>
                    `)}
                    <mg-button @click=${() => this.dispatchEvent(new CustomEvent("view-resume"))}>View full resume</mg-button>
                </div>

                <div class="projects section">
                    <div class="about-header">Projects</div>
                    <div class="about-subheader">Coming soon...</div>
                    <div class="about-subheader">Done nothing major until now</div>
                </div>
            </div>
        `;
    }
}

customElements.define('mg-content', Content);
