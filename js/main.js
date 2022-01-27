// Begin Slider

var sliderContent = Array.from(document.querySelectorAll('.testimonials .container'));

console.log(sliderContent);
// Get Number Of Slides
var slidesCount = sliderContent.length;

// Set Current Slide
var currentSlide = 1;


let next = document.querySelector(".testimonials .suiv")
let prev = document.querySelector(".testimonials .prec")

// Handle Click on Previous and Next Buttons
next.onclick = nextSlide;
prev.onclick = prevSlide;

// Trigger The Checker Function
theChecker();

function nextSlide() {
  
      currentSlide++;
      if (currentSlide == slidesCount+1) currentSlide=1;
      theChecker();
    
  }

  function prevSlide() {

      currentSlide--;
        if (!currentSlide) currentSlide=slidesCount;
      theChecker();

  }


// Create The Checker Function
function theChecker() {

    // Remove All Active Classes
    removeAllActive();
  
    // Set Active Class On Current Slide
    sliderContent[currentSlide - 1].classList.add('active');
  
  }
  
  // Remove All Active Classes From Images and Pagination Bullets
  function removeAllActive() {
  
    // Loop Through content
    sliderContent.forEach(function (content) {
  
      content.classList.remove('active');
  
    });

  
  }

  let testimonials = document.querySelector(".testimonials")
  let testContainer = document.querySelector(".testimonials .container.active" )

  
//   $(document).ready(function (){
//     $('.testimonials').height($('.testimonials .container.active').height() + 400);
// });
  console.log(testContainer.style.height);
  console.log(testimonials.style.height);