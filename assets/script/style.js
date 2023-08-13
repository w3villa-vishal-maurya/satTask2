let spin = document.getElementById("spinner");

let container = document.getElementById("container");
container.style.display = "none";

setTimeout(()=>{
    container.style.display = "block";
    spin.style.display = "none";
}, 3000)

const contentContainer = document.getElementById('contentContainer');
const paragraphs = contentContainer.querySelectorAll('.changing-text');
let currentIndex = 0;

function showNextContent() {
  paragraphs[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % paragraphs.length;
  paragraphs[currentIndex].style.display = 'block';
}

setInterval(showNextContent, 3000);


$('.herosection').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
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