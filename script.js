const video = document.querySelector('.player__video');
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const inputs = document.querySelectorAll(".controls input");
const skipButtons = document.querySelectorAll(".skip");

// Play/Pause Toggle
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = "❚ ❚";
    } else {
        video.pause();
        toggle.textContent = "►";
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
    progressFilled.style.width = `${percent}%`;  // Update progress bar width
}


function setProgress() {
    video.currentTime = (progress.value / 100) * video.duration;
}

function handleUpdate() {
    const suffix = this.dataset.sizing || '';  
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
    if (this.name === "volume") video.volume = this.value;
    if (this.name === "playbackSpeed") video.playbackRate = this.value;
}

function skipTime() {
    video.currentTime += parseFloat(this.dataset.skip);
}
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", setProgress);
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
skipButtons.forEach(button => button.addEventListener("click", skipTime));