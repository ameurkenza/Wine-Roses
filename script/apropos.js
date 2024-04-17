document.addEventListener('DOMContentLoaded', function() {

    // Effet de zoom sur les images au survol
    const images = document.querySelectorAll('.card img');
    const cards = document.querySelectorAll('.card'); // Ajout de cette ligne
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.5s ease';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

   

    // Pop-in des cartes lors du chargement de la page
    window.addEventListener('load', () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('pop-in');
            }, index * 300);
        });
    });

    // Vérifier si les cartes entrent dans le viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('pop-in');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
        // Stocker le texte original des cartes
        card.setAttribute('data-original-text', card.querySelector('.content p').textContent);
    });

});

