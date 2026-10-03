let questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let quizStartTime = null;
let stopwatchInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    quizStartTime = new Date();  // ⏱ Start time
    startStopwatch();
    loadQuestion();

    const nextBtn = document.getElementById("nextBtn");
    const finishBtn = document.getElementById("finishBtn");

    if (nextBtn) {
        nextBtn.addEventListener("click", nextQuestion);
        nextBtn.disabled = true;
    }
    if (finishBtn) finishBtn.addEventListener("click", finishQuiz);
});

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").innerText = question.question;

        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "btn btn-outline-primary my-2";
            button.innerText = option;
            button.onclick = () => {
                selectOption(index, button);
                document.getElementById("nextBtn").disabled = false;
            };
            optionsContainer.appendChild(button);
        });

        selectedOptionIndex = null;
        document.getElementById("nextBtn").disabled = true;
    } else {
        finishQuiz();
    }
}

function selectOption(index, button) {
    const allButtons = document.querySelectorAll("#options button");
    allButtons.forEach(btn => btn.classList.remove("active", "btn-success", "btn-danger"));

    button.classList.add("active");

    selectedOptionIndex = index;
    const correctIndex = questions[currentQuestionIndex].answer;

    if (selectedOptionIndex === correctIndex) {
        button.classList.add("btn-success");
        score++;
    } else {
        button.classList.add("btn-danger");
        allButtons[correctIndex].classList.add("btn-success"); // Highlight correct one
    }

    // Disable further clicks
    allButtons.forEach(btn => btn.onclick = null);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function finishQuiz() {
    clearInterval(stopwatchInterval);
    const quizEndTime = new Date();
    const durationInSeconds = Math.floor((quizEndTime - quizStartTime) / 1000);
    window.location.href = `/result/?score=${score}&total=${questions.length}&time=${durationInSeconds}`;
}

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        const now = new Date();
        const elapsedSeconds = Math.floor((now - quizStartTime) / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const stopwatchElement = document.getElementById("stopwatch");
        if (stopwatchElement) {
            stopwatchElement.innerText = formattedTime;
        }
    }, 1000);
}