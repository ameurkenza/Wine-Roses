document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
});

const questions = [
    {
        question: "Quand le restaurant Wine & Roses a-t-il été fondé ?", 
        image: "../pics/ambiance.webp", 
        correctAnswer: "2018",
        options: ["2003", "2010", "2018", "2023"]
    },
    {
        question: "Quel vin est connu pour sa couleur rosée ?", 
        image: "../pics/rose.webp", 
        correctAnswer: "Rosé",
        options: ["Chardonnay", "Rosé", "Merlot", "Sauvignon"]
    },
    {
        question: "Quel est le plat signature du chef au restaurant Wine & Roses ?", 
        image: "../pics/plat.webp", 
        correctAnswer: "Steak au poivre avec sauce au vin rouge",
        options: ["Steak au poivre avec sauce au vin rouge", "Risotto aux truffes noires", "Saumon grillé sur lit de légumes de saison", "Poulet rôti à l'ail et aux herbes"]
    },
    {
        question: "Quelle est l'ambiance principale recherchée par Wine & Roses pour ses clients ?", 
        image: "../pics/ambiancerechercher.webp", 
        correctAnswer: "Romantique et intime",
        options: [" Familiale et décontractée", "Romantique et intime", "Moderne et branchée", "Classique et élégante"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('quiz-intro').classList.add('hidden');
    displayQuestion();
}

function displayQuestion() {
    let questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ''; // Efface la question précédente
    if (currentQuestionIndex < questions.length) {
        let q = questions[currentQuestionIndex];
        let card = document.createElement('div');
        card.className = 'card question-card';
        let optionsHtml = q.options.map((option) => 
            `<button onclick="answer('${option}')">${option}</button>`
        ).join('');
        card.innerHTML = `
            <img src="${q.image}" alt="Image de la question">
            <p>${q.question}</p>
            ${optionsHtml}
        `;
        questionContainer.appendChild(card);
        questionContainer.classList.remove('hidden');
    } else {
        showResults();
    }
}

function answer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').classList.add('hidden');
    let resultContainer = document.getElementById('result-container');
    let resultMessage = `Votre score est : ${score} sur ${questions.length}`;
    let discountMessage = score > 0 ? `Votre code promo : WINEREDUCTION${score*10}` : "Dommage, réessayez lors du prochain quiz!";
    
    document.getElementById('result-message').textContent = resultMessage;
    document.getElementById('discount-code').textContent = discountMessage;
    resultContainer.classList.remove('hidden');
}
