function shiftingPages()
{
    const dark_light = document.querySelector(".dark_light_button");
    dark_light.addEventListener("click", () => 
    {
        (document.body).classList.toggle("light")
    })

    const pages = document.querySelector(".primary");
    const page_buttons = document.querySelectorAll(".modes");
    const specific_page = document.querySelectorAll(".page");
    pages.addEventListener("click", (event) => 
    {
        const component = document.getElementById(event.target.dataset.id);
        if(event.target.dataset.id)
        {
            event.target.classList.add("ON")
            specific_page.forEach((page) => 
            {
                page.classList.remove("ON")
            })
            component.classList.add("ON");
            page_buttons.forEach((button) => 
            {
                button.classList.remove("ON")
            })
        }
    })

    const page_button = document.querySelectorAll(".channel");
    for(let count = 0; count < page_button.length; count++)
    {
        page_button[count].addEventListener("click", function() 
        {
            let active = document.querySelectorAll(".current-button");
            active[0].className = active[0].className.replace("current-button", "")
            this.className = this.className + " current-button"
        })
    }
}

shiftingPages();