document.addEventListener('DOMContentLoaded', function() {
    // Animate letters with fading in
    const letters = document.querySelectorAll('#welcome-message span');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
        }, index * 150); // Delays each letter's fade-in
    });

    // Set initial styles for card animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    });

    // Animate cards fading and moving into place
    let cardAnimationDelay = 500; // Start delay after text animation
    cards.forEach(card => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, cardAnimationDelay);
        cardAnimationDelay += 200;
    });

    // Card hover animation
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });


      

});

  