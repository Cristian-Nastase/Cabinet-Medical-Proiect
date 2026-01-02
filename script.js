// Mobile header button
const menuButton = document.querySelector(".h-menu__button");

menuButton.addEventListener("click", function()
{
    menuButton.toggleAttribute("working");
});


// Carousel logic, scrolls and checks what slide is it on
const carousel = document.querySelector(".carousel__slides");
let carouselScrollWidth = carousel.scrollWidth;
let carouselOneScroll = Math.floor(carouselScrollWidth/3);

const carouselButtons = document.getElementsByClassName("carousel__button");
const carouselElements = document.getElementsByClassName('carousel__element');

window.addEventListener("resize", function()
{
    carouselScrollWidth = carousel.scrollWidth;
    carouselOneScroll = Math.floor(carouselScrollWidth / 3);
})

window.addEventListener("load", function()
{
    carousel.scroll(0, 0);
})

carousel.addEventListener("scrollend", (e) =>
{
    let index = Math.floor(carousel.scrollLeft / carouselOneScroll); 
    for(let i = 0; i < carouselElements.length; i++)
        {
            carouselElements[i].removeAttribute("visible-slide");
        }
    carouselElements[index].toggleAttribute("visible-slide");
    carouselButtons[index].checked = true;
});

for(let i = 0; i < carouselButtons.length; i++)
    {
        carouselButtons[i].setAttribute("data-index", String(i));
        carouselButtons[i].addEventListener("click", function()
        {
            const index = this.getAttribute("data-index");
            carousel.scroll(parseInt(index) * carouselOneScroll, 0);
        });
    }

// Form control
const form = document.getElementById('form');
const popupTemplate = document.getElementById('multumesc-pop-up');

form.addEventListener('submit', (e) =>
{
    e.preventDefault();
    form.reset();
    spawnPopUp();
});

function spawnPopUp()
{
    let popup = popupTemplate.content.cloneNode(true);
    document.body.appendChild(popup.cloneNode(true));

    const popUpButton = document.querySelector('.popup__button');

    popUpButton.addEventListener("click", (e) =>
    {
        popUpButton.parentElement.toggleAttribute('disappear'); 
        setTimeout( () => 
            {
                popUpButton.parentElement.remove();
            }, 2000);
    });
}

// Scrolling loading

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => 
        {
            if(entry.isIntersecting)
                {
                    entry.target.setAttribute("visible", '');
                }
        })
}, 
{
    threshold: 0.3,
});

const entriesElements = document.querySelectorAll('.main > *');
entriesElements.forEach(el => observer.observe(el));