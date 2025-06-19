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

// Load initial video
video.src = `videos/${files[currentIndex]}.mp4`;

// Play/Pause toggle
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

// Stop
stopButton.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
});

// Skip forward/back
document.querySelectorAll("[data-skip]").forEach(btn => {
  btn.addEventListener("click", () => {
    video.currentTime += parseFloat(btn.dataset.skip);
  });
});

// Volume control
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// Update progress bar
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});

// Play next video when current one ends
video.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % files.length;
  video.src = `videos/${files[currentIndex]}.mp4`;
  video.play();
  playButton.textContent = symbolPause;
});

// Sidebar: Play selected video
document.querySelectorAll("#videoList li").forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    video.src = `videos/${files[currentIndex]}.mp4`;
    video.play();
    playButton.textContent = symbolPause;
  });
});
