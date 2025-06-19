const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];
let currentIndex = 0;

const video = document.getElementById('vidPlayer');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const volumeSlider = document.getElementById('volume');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progressFilled');

// Load and play the selected video
function loadVideo(index) {
  video.src = `videos/${files[index]}.mp4`;
  video.load();
  video.play();
  playButton.textContent = symbolPause;
  currentIndex = index;

  // Highlight the active video in the sidebar
  document.querySelectorAll("#videoList li").forEach((li, i) => {
    li.classList.toggle("active", i === currentIndex);
  });
}

// Load initial video on page load
loadVideo(currentIndex);

// Toggle play/pause
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

// Stop button
stopButton.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
});

// Skip buttons
document.querySelectorAll("[data-skip]").forEach(button => {
  button.addEventListener("click", () => {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});

// Volume control
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// Progress bar update
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});

// Auto-play next video when current ends
video.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % files.length;
  loadVideo(currentIndex);
});

// Sidebar video selector click
document.querySelectorAll("#videoList li").forEach((item, index) => {
  item.addEventListener("click", () => {
    loadVideo(index);
  });
});
