document.addEventListener("DOMContentLoaded", () => {
    let but = document.getElementById("but");
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    but.addEventListener("click", () => {

        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
    });
});




// Get the necessary DOM elements
const toggleButton = document.getElementById('toggleButton');
const webcamSection = document.getElementById('webcamSection');
const webcam = document.getElementById('webcam');

// Function to toggle webcam section
function toggleWebcamSection() {
    if (webcamSection.style.display === 'none' || webcamSection.style.display === '') {
        // Open the section and start the webcam
        containerSection.style.display = 'block';
        webcamSection.style.display = 'block';

        // Access the webcam
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                webcam.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing the webcam:', error);
            });
    } else {
        // Close the section and stop the webcam
        containerSection.style.display = 'none';
        webcamSection.style.display = 'none';

        if (webcam.srcObject) {
            const tracks = webcam.srcObject.getTracks();
            tracks.forEach((track) => {
                track.stop();
            });
            webcam.srcObject = null;
        }
    }
}

// Add click event listener to the toggle button
toggleButton.addEventListener('click', toggleWebcamSection);