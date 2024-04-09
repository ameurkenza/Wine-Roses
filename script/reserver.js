document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var nom = document.getElementById('name').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var people = document.getElementById('people').value;

        var regexNom = /^[a-zA-Z\s]+$/;
        var currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD

        var valid = true;
        var erreurMessages = [];

        if (!regexNom.test(nom)) {
            erreurMessages.push('Nom non valide. Utilisez uniquement des lettres et des espaces.');
            valid = false;
        }

        if (date < currentDate) {
            erreurMessages.push('Date non valide. La date ne doit pas être antérieure à aujourd\'hui.');
            valid = false;
        }

        // Pas de validation spécifique pour l'heure autre que la vérification de remplissage
        if (time === '') {
            erreurMessages.push('Heure non valide. Vous devez sélectionner une heure.');
            valid = false;
        }

        if (people <= 0) {
            erreurMessages.push('Nombre de personnes non valide. Le nombre doit être supérieur à zéro.');
            valid = false;
        }

        // Affichage des messages d'erreur ou de succès
        if (!valid) {
            alert(erreurMessages.join('\n')); // Affiche tous les messages d'erreur
        } else {
            var successMessageElement = document.getElementById('success-message');
            successMessageElement.textContent = 'Votre réservation a bien été envoyée.';
            successMessageElement.style.display = 'block';

            // Réinitialisation du formulaire
            document.getElementById('reservation-form').reset();
        }
    });
});
