document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche la soumission par défaut du formulaire

        var nom = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var sujet = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        var regexNom = /^[a-zA-Z\s]+$/;
        var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var regexSujet = /^.{1,}$/;
        var regexMessage = /^.{1,}$/;

        var valid = true;
        var erreurMessage = '';

        if (!regexNom.test(nom)) {
            erreurMessage += 'Nom non valide. Utilisez uniquement des lettres et des espaces.\n';
            valid = false;
        }
        if (!regexEmail.test(email)) {
            erreurMessage += 'Email non valide.\n';
            valid = false;
        }
        if (!regexSujet.test(sujet)) {
            erreurMessage += 'Sujet non valide. Le sujet ne doit pas être vide.\n';
            valid = false;
        }
        if (!regexMessage.test(message)) {
            erreurMessage += 'Message non valide. Le message ne doit pas être vide.\n';
            valid = false;
        }

        if (!valid) {
            alert(erreurMessage); // Ou affichez les messages d'erreur d'une manière plus appropriée
        } else {
            // Affichage du message de succès
            var successMessageElement = document.getElementById('success-message');
            successMessageElement.textContent = 'Votre message a bien été envoyé.';
            successMessageElement.style.display = 'block'; // Rendre le message visible

            // Réinitialisation du formulaire
            document.getElementById('contact-form').reset();
        }
    });
});
