//   Signup and Login buttons  
    // Get the buttons by their IDs
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');

    // Add event listeners to handle navigation
    signupBtn.addEventListener('click', function() {
        window.location.href = 'register.html';  // Redirect to the sign-up page
    });

    loginBtn.addEventListener('click', function() {
        window.location.href = 'signin.html';  // Redirect to the login page
    });



        // menubar
        const menuBar = document.querySelector('.menu-bar');
        let isDragging = false;
        let startX;
        let scrollStart;

        menuBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - menuBar.offsetLeft;
            scrollStart = menuBar.scrollLeft;
        });

        menuBar.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        menuBar.addEventListener('mouseup', () => {
            isDragging = false;
        });

        menuBar.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - menuBar.offsetLeft;
            const move = (x - startX) * 3; //scroll speed
            menuBar.scrollLeft = scrollStart - move;
        });
        
        // carousel
       // Select the necessary elements
const slides = document.querySelector('.carousel .slides');
const slideImages = document.querySelectorAll('.carousel .slides img');
const slideCount = slideImages.length;
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 3000); // Slide every 3 seconds

// Attach event listeners for manual controls
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

// Function to update the slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Pause the slideshow on mouse hover
function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Resume the slideshow when mouse is not hovering
function resumeSlideshow() {
    slideInterval = setInterval(nextSlide, 3000);
}

// Add event listeners to pause and resume the slideshow on hover
document.querySelectorAll('.scroll-btn.next').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = this.previousElementSibling;
        container.scrollBy({ left: 200, behavior: 'smooth' });
    });
});

document.querySelectorAll('.scroll-btn.prev').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = this.nextElementSibling;
        container.scrollBy({ left: -200, behavior: 'smooth' });
    });
});