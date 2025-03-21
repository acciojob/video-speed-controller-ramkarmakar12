document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video-player");
    const playButton = document.querySelector(".toggle");
    const progress = document.querySelector(".progress__filled");
    const volumeControl = document.querySelector(".volume");
    const speedControl = document.querySelector(".playbackSpeed");
    const rewindButton = document.querySelector(".rewind");
    const forwardButton = document.querySelector(".forward");

    // Ensure video loads properly
    video.addEventListener("loadeddata", () => {
        console.log("Video is loaded");
    });

    // Toggle Play/Pause
    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.textContent = "❚ ❚";  // Pause icon
        } else {
            video.pause();
            playButton.textContent = "►";  // Play icon
        }
    }

    // Update progress bar
    function updateProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progress.value = percent;
    }

    // Seek video when progress bar is changed
    function setProgress() {
        const seekTime = (progress.value / 100) * video.duration;
        video.currentTime = seekTime;
    }

    // Update volume
    function updateVolume() {
        video.volume = volumeControl.value;
    }

    // Update playback speed
    function updateSpeed() {
        video.playbackRate = speedControl.value;
    }

    // Rewind 10 seconds
    function rewind() {
        video.currentTime = Math.max(0, video.currentTime - 10);
    }

    // Forward 25 seconds
    function forward() {
        video.currentTime = Math.min(video.duration, video.currentTime + 25);
    }

    // Event Listeners
    playButton.addEventListener("click", togglePlay);
    video.addEventListener("click", togglePlay);
    video.addEventListener("timeupdate", updateProgress);
    progress.addEventListener("input", setProgress);
    volumeControl.addEventListener("input", updateVolume);
    speedControl.addEventListener("input", updateSpeed);
    rewindButton.addEventListener("click", rewind);
    forwardButton.addEventListener("click", forward);
});