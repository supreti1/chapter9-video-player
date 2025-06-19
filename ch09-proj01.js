const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];

// Core elements
const video = document.getElementById('vidPlayer');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const volumeSlider = document.getElementById('volume');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progressFilled');

// Play/Pause Toggle
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

// Stop video
stopButton.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
});

// Skip
const skipButtons = document.querySelectorAll('[data-skip]');
skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});

// Volume control
volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value;
});

// Update progress bar
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});
