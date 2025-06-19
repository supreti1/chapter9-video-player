const symbolPlay = '▶️';
const symbolPause = '⏸️';
const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];
let currentIndex = 0;

const video = document.getElementById('vidPlayer');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const volumeSlider = document.getElementById('volume');
const progressFilled = document.getElementById('progressFilled');

// Load and play video
function loadVideo(index) {
  video.src = 'videos/' + files[index] + '.mp4';
  video.play();
  playButton.textContent = symbolPause;
  currentIndex = index;
  highlightCurrent();
}

function highlightCurrent() {
  document.querySelectorAll("#videoList li").forEach((li, i) => {
    li.classList.toggle("active", i === currentIndex);
  });
}

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

stopButton.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
});

document.querySelectorAll("[data-skip]").forEach(btn => {
  btn.addEventListener("click", () => {
    video.currentTime += parseFloat(btn.dataset.skip);
  });
});

volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + '%';
});

// ⏭ Auto-play next video when current ends
video.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % files.length;
  loadVideo(currentIndex);
});

document.querySelectorAll("#videoList li").forEach((item, index) => {
  item.addEventListener("click", () => loadVideo(index));
});

// Initial load
loadVideo(currentIndex);

