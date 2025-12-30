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

window.addEventListener("resize", function()
{
    carouselScrollWidth = carousel.scrollWidth;
    carouselOneScroll = Math.floor(carouselScrollWidth / 3);
})

carousel.addEventListener("scrollend", (e) =>
{
    let index = Math.floor(carousel.scrollLeft / carouselOneScroll); 
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