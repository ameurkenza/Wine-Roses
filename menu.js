document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function(item) {
    // Changement de couleur au survol
    item.addEventListener('mouseenter', function(event) {
      event.target.style.backgroundColor = 'lightgray';
      showDescription(event.target);
    });

    item.addEventListener('mouseleave', function(event) {
      event.target.style.backgroundColor = '';
      hideDescription();
    });

    // Augmenter la taille du texte au clic
    item.addEventListener('click', function(event) {
      event.target.style.fontSize = '1.5em';
      setTimeout(function() { // Revenir à la taille normale après 2 secondes
        event.target.style.fontSize = '';
      }, 2000);
    });
  });

  // Afficher une description au survol
  function showDescription(menuItem) {
    const descriptionText = menuItem.getAttribute('data-description');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('id', 'description');
    descriptionDiv.textContent = descriptionText;
    descriptionDiv.style.position = 'absolute';
    descriptionDiv.style.backgroundColor = 'white';
    descriptionDiv.style.border = '1px solid black';
    descriptionDiv.style.padding = '5px';
    descriptionDiv.style.top = '0';
    descriptionDiv.style.left = '100%';
    menuItem.appendChild(descriptionDiv);
  }

  // Cacher la description
  function hideDescription() {
    const description = document.getElementById('description');
    if (description) {
      description.remove();
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Ciblez tous les titres h2 de section
  const sectionTitles = document.querySelectorAll('main h2');
  
  // Fonction pour ajouter la classe d'animation
  function animateTitles() {
    sectionTitles.forEach((title, index) => {
      // Ajoutez un délai basé sur l'index pour que les titres n'entrent pas tous en même temps
      setTimeout(() => {
        title.classList.add('animate-title');
      }, index * 500); // 500 ms d'intervalle entre chaque titre
    });
  }

  // Appel de la fonction pour démarrer l'animation à l'ouverture de la page
  animateTitles();
});

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionnez le conteneur du menu, vous devrez peut-être ajuster ce sélecteur
  const menuContainer = document.querySelector('nav');

  menuContainer.addEventListener('click', function() {
    // Sélectionnez tous les éléments de menu
    const menuItems = document.querySelectorAll('main section article');
    let delay = 0;

    menuItems.forEach((item) => {
      // Réinitialisez l'animation si elle a déjà été jouée
      item.style.animation = 'none';
      item.offsetHeight; /* Déclencheur de reflow pour redémarrer l'animation */
      item.style.animation = null; 

      // Ajoutez la classe animate-item avec un délai
      setTimeout(() => {
        item.classList.add('animate-item');
      }, delay);

      // Augmentez le délai pour le prochain élément
      delay += 100; // 100 millisecondes d'intervalle entre chaque élément
    });
  });
});
