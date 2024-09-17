import { html, css, LitElement } from "lit";

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

    .main-container {
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 0px;
      /* height: 75vh; */
      background-color: lightgray;
      width: 100%;
      height: 100%;
    }

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;
    }

    .main-container > mg-navbar {
      top: 0px;
      // position:fixed;
      width: 100%;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      position: sticky;
    }

    .test-theme {
      display: flex;
      border: 1px solid #00ff00;
      margin: 50px;
      padding: 50px;
      justify-content: center;
      flex-direction: column;
      background-color: #1e1e1e; /* Slightly lighter Dark Charcoal */
      color: #00ff00;
      font-family: "Lato", sans-serif; /* Body Font */
    }

    .test-theme > h2 {
      font-family: "Orbitron", sans-serif;
      color: #00ff00;
    }

    .test-theme > p {
      color: #ffffff;
    }

    .test-theme button {
      background-color: #ff5733; /* Orange */
      color: #121212; /* Dark Charcoal */
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-family: "Lato", sans-serif;
    }

    .test-theme button:hover {
      background-color: #3498db; /* Blue */
      color: #ffffff; /* White */
    }
  `;

  static get properties() {
    return {
      scroll_into_view: { type: String },
      show_floating_list_bool: { type: Boolean },
    };
  }

  
  openNewTab(e)
  {
      const all_urls = {
          "github":"https://github.com/rajesh010/",
          "linkedin":"https://www.linkedin.com/in/mohan-gautam-4b46a6215/",
          "youtube":"",
          "twitter":"https://x.com/RajeshGautam010",
          "instagram":"https://www.instagram.com/rajesh.gautam010/",
      }

      window.open(all_urls[e.detail], "_blank")

  }

  render() {
    let options = [
      { name: "home", value: "home" },
      { name: "about", value: "about" },
      { name: "experience", value: "experience" },
      { name: "projects", value: "projects" },
      { name: "contact", value: "contact" },
    ];

    const showFloatingList = (e) => {
      if (this.show_floating_list_bool) {
        return html`
          <mg-floating-list
            .options=${options}
            @item-click=${(e) => {
              this.show_floating_list_bool = false;
              this.scroll_into_view = e.detail.value;
            }}
          >
          </mg-floating-list>
        `;
      }
    };

    {
      /* <div class="test-theme">
                Hey, welcome <br>
                I am mohan and testing this components
                <button> crazy </button>
            </div> */
    }


    return html`  
            <div class="main-container" >
                <mg-navbar
                .icon_name=${this.show_floating_list_bool ? "xmark" : "bars"}
                @side-icon-click=${(e) => {
                  this.show_floating_list_bool = !this.show_floating_list_bool;
                }}

                @nav-click=${(e) => (this.scroll_into_view = e.detail.value)}

                ></mg-navbar>

                ${showFloatingList()}

                <mg-content
                    .scroll_into_view = ${this.scroll_into_view}
                    @contact-clicked = ${(e) =>
                      (this.scroll_into_view = "contact")}
                    @view-resume = ${(e) => (location.href = "/resume.pdf")}
                >
                </mg-content>

               
                <contact-form 
                    @submit=${(e) => console.log(" submit clickedd ", e.detail)}
                    .scroll_into_view = ${this.scroll_into_view}
                >
                </contact-form>

            </div>

            </div>

            <mg-footer
            @icon-clicked=${this.openNewTab}
                .main_highlight=${default_values.main_highlight}
                .description=${default_values.description}
                .icon_lists=${default_values.icon_lists}
                .copyright_text=${default_values.copyright_text}
                .date_cp=${default_values.date_cp}
                ></mg-footer>

            
        `;
  }
}

customElements.define("my-element", MyElement);
