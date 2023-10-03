document.addEventListener("DOMContentLoaded", () => {
    const questionsList = document.getElementById("questionsList");
    const addQuestionForm = document.getElementById("addQuestionForm");
    const questionsToggle = document.getElementById("questionsToggle");
    const questionsSection = document.getElementById("questionsSection");
    const clearAllBtn = document.getElementById("clearAllBtn");
    const generateBtn = document.getElementById("generateBtn");
    const questionDisplay = document.getElementById("questionDisplay");
    const questionInput = document.getElementById("questionInput");
    const categorySelect = document.getElementById("categorySelect");

    const categoryInput = document.getElementById("categoryInput");



    const getSelectedCategory = () => {
        const selectedCategory = categoryInput.value.trim();
        return selectedCategory || "All";
    };

    const populateCategoryDropdown = () => {
        const uniqueCategories = [...new Set(questions.map(questionObject => questionObject.category))];
        categorySelect.innerHTML = '<option value="All">All</option>'; // Add an option for "All"
        uniqueCategories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    };

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
        questions.forEach((questionObject, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
            <div class="flex space-x-4">
            
                <button class="text-red-500 delete-btn" data-index="${index}">&#x2718;</button>

                <p class="text-gray-500 ">${questionObject.question}  <span class=" dark:bg-white bg-black   rounded  text-sm px-1">${questionObject.category}</span>
                </p>

                </div>
            `;
            questionsList.appendChild(listItem);
            populateCategoryDropdown();
        });
    };
    

    const generateRandomQuestion = () => {
        if (shuffledQuestions.length === 0) {
            questionDisplay.textContent = "All questions shown. Click 'Generate' to repeat.";
            return;
        }

        questionDisplay.textContent = shuffledQuestions[questionIndex].question;
        questionIndex = (questionIndex + 1) % shuffledQuestions.length;
    };

    displayQuestions();

    addQuestionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newQuestion = questionInput.value.trim();
        const category = getSelectedCategory();
        if (newQuestion !== "") {
            questions.push({ question: newQuestion, category: category });
            localStorage.setItem("questions", JSON.stringify(questions));
            shuffledQuestions = shuffleArray(questions); // Shuffle the entire array of question objects
            questionInput.value = "";
            categoryInput.value = "";
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