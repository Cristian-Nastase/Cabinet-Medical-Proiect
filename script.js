const menuButton = document.querySelector(".h-menu__button");

const carousel = document.querySelector(".carousel__slides");
let carouselScrollWidth = carousel.scrollWidth;
let carouselOneScroll = Math.floor(carouselScrollWidth/3);

const carouselButtons = document.getElementsByClassName("carousel__button");

menuButton.addEventListener("click", function()
{
    menuButton.toggleAttribute("working");
});


// Carousel logic, scrolls and checks what slide is it on

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
