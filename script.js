document.addEventListener("DOMContentLoaded", () => {
    const questionsList = document.getElementById("questionsList");
    const addQuestionForm = document.getElementById("addQuestionForm");
    const questionsToggle = document.getElementById("questionsToggle");
    const questionsSection = document.getElementById("questionsSection");
    const clearAllBtn = document.getElementById("clearAllBtn");
    const generateBtn = document.getElementById("generateBtn");
    const questionDisplay = document.getElementById("questionDisplay");
    const questionInput = document.getElementById("questionInput");

    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    let shuffledQuestions = shuffleArray(questions);
    let questionIndex = 0;

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const displayQuestions = () => {
        questionsList.innerHTML = "";
        questions.forEach((question, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${question}</span>
                <button class="ml-2 text-red-500 delete-btn" data-index="${index}">Delete</button>
            `;
            questionsList.appendChild(listItem);
        });
    };

    const generateRandomQuestion = () => {
        if (shuffledQuestions.length === 0) {
            questionDisplay.textContent = "All questions shown. Click 'Generate' to repeat.";
            return;
        }

        questionDisplay.textContent = shuffledQuestions[questionIndex];
        questionIndex = (questionIndex + 1) % shuffledQuestions.length;
    };

    displayQuestions();

    addQuestionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newQuestion = questionInput.value.trim();
        if (newQuestion !== "") {
            questions.push(newQuestion);
            localStorage.setItem("questions", JSON.stringify(questions));
            shuffledQuestions = shuffleArray(questions);
            questionInput.value = "";
            questionIndex = 0;
            displayQuestions();
        }
    });

    questionsList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const index = parseInt(event.target.getAttribute("data-index"));
            questions.splice(index, 1);
            localStorage.setItem("questions", JSON.stringify(questions));
            shuffledQuestions = shuffleArray(questions);
            questionIndex = 0;
            displayQuestions();
        }
    });

    clearAllBtn.addEventListener("click", () => {
        questions = [];
        localStorage.removeItem("questions");
        shuffledQuestions = [];
        questionIndex = 0;
        displayQuestions();
    });

    generateBtn.addEventListener("click", () => {
        generateRandomQuestion();
    });

    questionsToggle.addEventListener("click", () => {
        questionsSection.classList.toggle("hidden");
    });
});
