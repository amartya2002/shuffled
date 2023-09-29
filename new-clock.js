// document.addEventListener("DOMContentLoaded", () => {
//     const timerButton = document.getElementById("timerButton");
//     const timerDropdown = document.getElementById("timerDropdown");
//     const timeInput = document.getElementById("timeInput");
//     const startButton = document.getElementById("startButton");
//     const pauseButton = document.getElementById("pauseButton");
//     const stopButton = document.getElementById("stopButton");
//     const timerDisplay = document.getElementById("timerDisplay");
//     let timer;
//     let totalSeconds;

//     // Function to start the timer
//     const startTimer = () => {
//         totalSeconds = parseInt(timeInput.value) * 60;
//         if (!isNaN(totalSeconds) && totalSeconds > 0) {
//             startButton.classList.add("hidden");
//             pauseButton.classList.remove("hidden");
//             stopButton.classList.remove("hidden");
//             timerDropdown.classList.add("hidden");
//             timerDisplay.classList.remove("hidden");

//             timer = setInterval(() => {
//                 if (totalSeconds <= 0) {
//                     clearInterval(timer);
//                     timerDisplay.textContent = "Time's up!";
//                     pauseButton.classList.add("hidden");
//                 } else {
//                     const minutes = Math.floor(totalSeconds / 60);
//                     const seconds = totalSeconds % 60;
//                     timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//                     totalSeconds--;
//                 }
//             }, 1000);
//         } else {
//             alert("Please enter a valid time.");
//         }
//     };

//     // Event listeners
//     timerButton.addEventListener("click", (event) => {
//         event.stopPropagation();
//         timerDropdown.classList.toggle("hidden");
//     });

//     document.body.addEventListener("click", () => {
//         timerDropdown.classList.add("hidden");
//     });

//     timerDropdown.addEventListener("click", (event) => {
//         event.stopPropagation();
//     });

//     startButton.addEventListener("click", startTimer);

//     pauseButton.addEventListener("click", () => {
//         clearInterval(timer);
//         startButton.classList.remove("hidden");
//         pauseButton.classList.add("hidden");
//     });

//     stopButton.addEventListener("click", () => {
//         clearInterval(timer);
//         startButton.classList.remove("hidden");
//         pauseButton.classList.add("hidden");
//         stopButton.classList.add("hidden");
//         timerDisplay.classList.add("hidden");
//         timerDropdown.classList.add("hidden");

//         timerDisplay.textContent = "";
//         timeInput.value = "";
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const timerButton = document.getElementById("timerButton");
    const timerDropdown = document.getElementById("timerDropdown");
    const minutesInput = document.getElementById("minutesInput");
    const secondsInput = document.getElementById("secondsInput");
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");
    const stopButton = document.getElementById("stopButton");
    const timerDisplay = document.getElementById("timerDisplay");
    let timer;
    let totalSeconds;

    // Function to start the timer
    const startTimer = () => {
        totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
        if (!isNaN(totalSeconds) && totalSeconds > 0) {
            startButton.classList.add("hidden");
            pauseButton.classList.remove("hidden");
            stopButton.classList.remove("hidden");
            timerDropdown.classList.add("hidden");
            timerDisplay.classList.remove("hidden");

            timer = setInterval(() => {
                if (totalSeconds <= 0) {
                    clearInterval(timer);
                    timerDisplay.textContent = "Time's up!";
                    pauseButton.classList.add("hidden");
                } else {
                    const minutes = Math.floor(totalSeconds / 60);
                    const seconds = totalSeconds % 60;
                    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
                    totalSeconds--;
                }
            }, 1000);
        } else {
            alert("Please enter valid minutes and seconds.");
        }
    };

    timerButton.addEventListener("click", (event) => {
        event.stopPropagation();
        timerDropdown.classList.toggle("hidden");
    });

    document.body.addEventListener("click", () => {
        timerDropdown.classList.add("hidden");
    });

    timerDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    startButton.addEventListener("click", startTimer);

    pauseButton.addEventListener("click", () => {
        clearInterval(timer);
        startButton.classList.remove("hidden");
        pauseButton.classList.add("hidden");
    });

    stopButton.addEventListener("click", () => {
        clearInterval(timer);
        startButton.classList.remove("hidden");
        pauseButton.classList.add("hidden");
        stopButton.classList.add("hidden");
        timerDisplay.classList.add("hidden");

        timerDisplay.textContent = "";
        minutesInput.value = "0";
        secondsInput.value = "0";
    });
});
