// this defaultValues will have all the default values that the component will require
export const default_values = {
    // the footer default_values
    main_highlight:"Mohan Gautam",
    description:"Passionate Full-Stack Developer & more.",
    date_cp:String(new Date().getFullYear()),
    copyright_text:"Mohan Gautam. All rights reserved.",
    icon_lists:[
        {
          icon_name: "fa-github",
          icon_variant: "fa-brands",
          callback_fn: () => {

            this.dispatchEvent(new CustomEvent("github-clicked", {bubbles:true,composed:true}))
          },
        },
        {
          icon_name: "fa-linkedin",
          icon_variant: "fa-brands",
          callback_fn: () => {
            this.dispatchEvent(new CustomEvent("linkedin-clicked", {bubbles:true,composed:true}))
          },
        },
        {
          icon_name: "fa-youtube",
          icon_variant: "fa-brands",
          callback_fn: () => {
            this.dispatchEvent(new CustomEvent("youtube-clicked", {bubbles:true,composed:true}))
          },
        },
        {
          icon_name: "fa-x-twitter",
          icon_variant: "fa-brands",
          callback_fn: () => {
            this.dispatchEvent(new CustomEvent("twitter-clicked", {bubbles:true,composed:true}))
          },
        },
        {
          icon_name: "fa-instagram",
          icon_variant: "fa-brands",
          callback_fn: () => {
            this.dispatchEvent(new CustomEvent("instagram-clicked", {bubbles:true,composed:true}))
          },
        },
    ],

    options:[
        { name: "Home", value: "home" },
        { name: "About", value: "about" },
        { name: "Experience", value: "experience" },
        { name: "Projects", value: "projects" },
        { name: "Contact", value: "contact" }
    ],

    

}