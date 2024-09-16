import { html, css, LitElement } from "lit"

import { Navbar } from "./components/Navbar.js";
import { Sidebar } from "./components/Sidebar.js";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";

import { FaIcon } from "./components/FaIcon.js";

import { ProjectCard } from "./components/ProjectCard.js";

import { MgButton } from "./mg_components/MgButton.js";

import { MgFloatingList } from "./mg_components/MgFloatingList.js";

import { default_values } from "./utils/defaultValues.js";

class MyElement extends LitElement {
    static styles = css`
        /* Your styles here */

        .main-container
        {
            border: 1px solid lightgray;
            border-radius: 10px;
            padding: 0px;
            /* height: 75vh; */
            background-color: lightgray;
            width:100%;
            height:100%;
        }
        
        .contact
            {
                display:flex;
                flex-direction:column;
                align-items:center;
                text-align:start;
            }

        .main-container > mg-navbar{
            top:0px; 
            // position:fixed;
            width:100%;
            box-shadow:0 8px 16px rgba(0,0,0,0.2);
        }



        .test-theme {
            display: flex;
            border: 1px solid #00FF00;
            margin: 50px;
            padding: 50px;
            justify-content: center;
            flex-direction: column;
            background-color: #1E1E1E; /* Slightly lighter Dark Charcoal */
            color: #00FF00;
            font-family: 'Lato', sans-serif; /* Body Font */
        }

        .test-theme > h2 {
            font-family: 'Orbitron', sans-serif; 
            color: #00FF00;
        }

        .test-theme > p {
            color: #FFFFFF;
        }

        .test-theme button {
            background-color: #FF5733; /* Orange */
            color: #121212; /* Dark Charcoal */
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Lato', sans-serif;
        }

        .test-theme button:hover {
            background-color: #3498DB; /* Blue */
            color: #FFFFFF; /* White */
        }

    `

    static get properties() {
        return {
            scroll_into_view: { type: String },
            show_floating_list_bool: { type: Boolean },
        };
    }


    render() {

        let options = [
            { name: "home", value: "home" },
            { name: "about", value: "about" },
            { name: "experience", value: "experience" },
            { name: "projects", value: "projects" },
            { name: "contact", value: "contact" },
        ]

        const showFloatingList = (e) => { 
            if (this.show_floating_list_bool) {
                return html`
                        <mg-floating-list 
                            .options=${options}
                            @item-click=${e => {
                            this.show_floating_list_bool = false
                            this.scroll_into_view = e.detail.value
                    }}   
                        >
                        </mg-floating-list>
                        `
            }
        }

            {/* <div class="test-theme">
                Hey, welcome <br>
                I am mohan and testing this components
                <button> crazy </button>
            </div> */}

        return html`  
            <div class="main-container" >
                <mg-navbar
                @side-icon-click=${e => { console.log(" menu icon clicked -- ",this.show_floating_list_bool); this.show_floating_list_bool = !this.show_floating_list_bool }}

                @nav-click=${e => {
                // here it has to information on where to scroll... 
                this.scroll_into_view = e.detail.value
                console.log("Clickkkkkeddddd ", e.target.value, " and detail -- ", e.detail, this.scroll_into_view)
            }}

                ></mg-navbar>

                ${showFloatingList()}

                <mg-content
                    .scroll_into_view = ${this.scroll_into_view}
                    @contact-clicked = ${e=> this.scroll_into_view = "contact"}
                >
                </mg-content>

               
                <contact-form 
                    @submit=${e => console.log(" submit clickedd ", e.detail)}
                    .scroll_into_view = ${this.scroll_into_view}
                >
                </contact-form>

            </div>

            </div>

            <mg-footer
                .main_highlight=${default_values.main_highlight}
                .description=${default_values.description}
                .icon_lists=${default_values.icon_lists}
                .copyright_text=${default_values.copyright_text}
                .date_cp=${default_values.date_cp}
                ></mg-footer>

            
        `;
    }
}

customElements.define('my-element', MyElement);

