// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations on Scroll (fadeIn effect)
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fadeInOnScroll');
    
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Optionally, add "fadeInOnScroll" class to sections that need the fade-in animation
// Example: <section class="fadeInOnScroll">Your content here</section>

// Add event listener to elements that should animate
document.addEventListener("DOMContentLoaded", () => {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');

    // Fade in name and email
    setTimeout(() => {
        name.classList.add('visible');
        email.classList.add('visible');
    }, 1000);
});
