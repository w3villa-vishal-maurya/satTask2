let spin = document.getElementById("spinner");

let container = document.getElementById("container");
container.style.display = "none";

setTimeout(()=>{
    container.style.display = "block";
    spin.style.display = "none";
}, 3000)


$('.herosection').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})