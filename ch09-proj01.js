const videoPlayer = document.getElementById('vidPlayer');
const thumbnails = document.querySelectorAll('.thumbnails img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const videoList = ['Nature.mp4', 'River.mp4', 'Waterfall.mp4', 'Wave.mp4'];
let currentIndex = 0;

function loadVideo(index) {
  const filename = videoList[index];
  videoPlayer.src = `videos/${filename}`;
  videoPlayer.play();
  currentIndex = index;
  updateThumbnailHighlight();
}

function updateThumbnailHighlight() {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentIndex);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videoList.length;
  loadVideo(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
  loadVideo(currentIndex);
});

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    loadVideo(index);
  });
});

videoPlayer.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % videoList.length;
  loadVideo(currentIndex);
});

// Initial highlight
updateThumbnailHighlight();
