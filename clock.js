document.addEventListener("DOMContentLoaded", () => {
    const timeInput = document.getElementById("timeInput");
    const startButton = document.getElementById("startButton");
    const timerDisplay = document.getElementById("timerDisplay");

    let timer;

    startButton.addEventListener("click", () => {
        const timeInSeconds = parseInt(timeInput.value);
        if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
            startButton.disabled = true;
            startStopwatch(timeInSeconds);
        } else {
            alert("Please enter a valid positive number.");
        }
    });

    function startStopwatch(timeInSeconds) {
        let seconds = timeInSeconds;
        timer = setInterval(() => {
            timerDisplay.textContent = formatTime(seconds);

            if (seconds <= 0) {
                clearInterval(timer);
                timerDisplay.textContent = "Time's up!";
                startButton.disabled = false;
            }

            seconds--;
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }
});
