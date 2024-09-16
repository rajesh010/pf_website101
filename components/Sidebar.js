 import { LitElement, html, css } from 'lit';

 import { FaIcon } from './FaIcon.js';

export class Sidebar extends LitElement {
    static styles = [
        css`
            .main-container
            {
                display:flex;
                flex-direction:column;
                min-width:20px;
                background-color: whitesmoke;
                gap:5px;
            }

        `
    ];

    render() {
        return html`
  <i class="fas fa-home"></i> HOMEEExx F

        <div class="main-container"> 
            <mg-fa-icon icon_name="fa-github"  icon_variant="fa-brands"></mg-fa-icon>
            <mg-fa-icon icon_name="fa-linkedin"  icon_variant="fa-brands"></mg-fa-icon>
            <mg-fa-icon icon_name="fa-youtube"  icon_variant="fa-brands"></mg-fa-icon>
            <mg-fa-icon icon_name="fa-x-twitter"  icon_variant="fa-brands"></mg-fa-icon>
            <mg-fa-icon icon_name="fa-instagram"  icon_variant="fa-brands"></mg-fa-icon>
        </div>
        `;
    }
}
customElements.define('mg-sidebar', Sidebar);
