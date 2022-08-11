const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


function incrementButton(){
  var element = document.getElementById('cartAmount');
  var value = element.innerHTML;
  ++value

  console.log(value)
  document.getElementById('cartAmount').innerHTML = value
}




var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;

//Uncomment for auto play
// var slideInterval = setInterval(nextSlide,2000);
  
function nextSlide(){
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add("showing");
  console.log("next slide");
}

function prevSlide(){
  if(currentSlide > 0){
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide-1)%slides.length;
  slides[currentSlide].classList.add("showing");
  console.log("prev slide");
  }
  console.log("no previous slide")
}

 
  
// });
