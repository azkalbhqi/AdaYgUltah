src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"

// Define the birthdate
const birthDate = new Date("2005-01-14");

// Get the current date
const currentDate = new Date();

// Calculate the difference in time (milliseconds)
const timeDifference = currentDate - birthDate;

// Convert milliseconds to days
const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const age = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
const hoursLived = Math.floor(timeDifference / (1000 * 60 * 60));

document.getElementById("daysLived").textContent = `${daysLived} Days`;
document.getElementById("hoursLived").textContent = `${hoursLived} Hours`;
document.getElementById("age").textContent = `${age} Years`;


// The text to display
const text = "HAPPY BIRTHDAY GHANIYAAAA!";
const typingElement = document.getElementById("type");

let index = 0;

// Typing effect function
function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100); // Typing speed
    } else {
        setTimeout(() => {
            typingElement.textContent = ""; // Clear text
            index = 0; // Reset index
            typeEffect(); // Restart typing effect
        }, 10000); // Wait 10 seconds before restarting
    }
}

// Start the typing effect
typeEffect();


const container = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel > div');
const dots = document.querySelectorAll('.pagination > span');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const breakpoint = 768;
const slidesPerPage = 3;
const totalSlidesCount = slides.length;
// Mobile stuff
let touchStartX = 0;
let touchEndX = 0;

// Previous
prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -slides[0].offsetWidth, behavior: 'smooth' });
  const centerSlideIndex = getCenterSlideIndex() - 1;
  updateActiveDot(centerSlideIndex);
});

// Next
nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: slides[0].offsetWidth, behavior: 'smooth' });
  const centerSlideIndex = getCenterSlideIndex() + 1;
  updateActiveDot(centerSlideIndex);
});

// Mobile
container.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

container.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});

container.addEventListener('touchend', () => {
  let centerSlideIndex;
  const swipeThreshold = 50;
  
  if (touchStartX - touchEndX > swipeThreshold) {
    centerSlideIndex = getCenterSlideIndex() + 1;
  } else {
    centerSlideIndex = getCenterSlideIndex() - 1;
  }
  
  updateActiveDot(centerSlideIndex);
  touchStartX = 0;
  touchEndX = 0;
  
});

// Misc functions
function updateActiveDot(centerSlideIndex) {
  const isMobileView = container.offsetWidth <= breakpoint;
  const dotsCount = isMobileView ? dots.length : dots.length - 2;
  const slidesCount = isMobileView ? 1 : dotsCount - slidesPerPage;
  const pageIndex = centerSlideIndex - slidesCount;
  if (pageIndex >= 0 && pageIndex < dotsCount) {
    dots.forEach((dot) => dot.classList.remove('w-8'));
    dots[pageIndex].classList.add('w-8');
  }
}

function getCenterSlideIndex() {
  const slideWidth = slides[0].offsetWidth;
  const containerWidth = container.offsetWidth;
  const centerSlideIndex = Math.round((container.scrollLeft + Math.floor(containerWidth / 2)) / slideWidth);
  return centerSlideIndex;
}


document.getElementById('toggleHtmlHead').addEventListener('change', function () {
    // Select the section
    const section = document.querySelector('section.bg-pink-50');
    
    // Get the inner HTML
    const htmlCode = section.outerHTML;

    // Display the HTML code in the pre element
    const outputElement = document.getElementById('htmlOutputHead');
    
    // Toggle behavior based on the checkbox state
    if (this.checked) {
      outputElement.textContent = htmlCode;
      outputElement.classList.remove('hidden'); // Show the output
    } else {
      outputElement.classList.add('hidden'); // Hide the output
    }
  });

  document.getElementById('toggleHtmlMemo').addEventListener('change', function () {
    // Select the section
    const section = document.querySelector('#card');
    
    // Get the inner HTML
    const htmlCode = section.outerHTML;

    // Display the HTML code in the pre element
    const outputElement = document.getElementById('htmlOutputMemo');
    
    // Toggle behavior based on the checkbox state
    if (this.checked) {
      outputElement.textContent = htmlCode;
      outputElement.classList.remove('hidden'); // Show the output
    } else {
      outputElement.classList.add('hidden'); // Hide the output
    }
  });

  document.getElementById('toggleHtmlFun').addEventListener('change', function () {
    // Select the section
    const section = document.querySelector('#list');
    
    // Get the inner HTML
    const htmlCode = section.outerHTML;

    // Display the HTML code in the pre element
    const outputElement = document.getElementById('htmlOutputFun');
    
    // Toggle behavior based on the checkbox state
    if (this.checked) {
      outputElement.textContent = htmlCode;
      outputElement.classList.remove('hidden'); // Show the output
    } else {
      outputElement.classList.add('hidden'); // Hide the output
    }
  });


