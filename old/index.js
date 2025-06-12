async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
    } catch (error) {
        console.error("Error accessing webcam/microphone:", error);
    }
}

startWebcam();
