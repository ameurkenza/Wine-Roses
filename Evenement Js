document.addEventListener('DOMContentLoaded', () => {
    // Log when DOM is fully loaded
    console.log('The events page DOM is fully loaded and parsed');

    // Query selectors
    const eventBoxes = document.querySelectorAll('.event-box');
    const form = document.querySelector('form');
    const dateElement = document.querySelector('#current-date');

    // Add interaction effects to event boxes
    eventBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = '#f8f8f8';
            box.style.transition = 'all 0.3s ease-in-out';
            box.style.transform = 'scale(1.1)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = '';
            box.style.transform = 'scale(1)';
        });
        box.addEventListener('click', () => {
            box.classList.toggle('active');
            const details = box.querySelector('.event-details'); // Assumes event details are direct children
            if (details) {
                details.classList.toggle('active');
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation with live feedback
    if (form) {
        form.addEventListener('input', event => {
            validateInput(event.target); // Immediate feedback function
        });
        form.addEventListener('submit', event => {
            if (!validateForm()) {
                event.preventDefault();  // Prevent form from submitting
                alert("Please correct errors before submitting.");
            }
        });
    }

    // Dynamic Date Display
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
    }
});

// Validation functions
function validateInput(input) {
    if (input.type === 'email' && !validateEmail(input.value)) {
        input.setCustomValidity('Please enter a valid email address.');
    } else {
        input.setCustomValidity('');
    }
}

function validateForm() {
    const emailInput = document.querySelector('#email');
    if(emailInput && !validateEmail(emailInput.value)) {
        emailInput.style.border = "2px solid red";
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Animation on scroll for heading
window.addEventListener('scroll', () => {
    const heading = document.getElementById('events-heading');
    const position = heading.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        heading.classList.add('come-in');
    }
});

// Handle hamburger menu toggle for small screens
document.querySelector('.hamburger-checkbox').addEventListener('change', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = this.checked ? 'block' : 'none';
});
