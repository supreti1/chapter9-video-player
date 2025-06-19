const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];
let currentIndex = 0;

const video = document.getElementById('vidPlayer');
const listItems = document.querySelectorAll("#videoList li");

function loadVideo(index) {
  video.src = `videos/${files[index]}.mp4`;
  video.play();
  currentIndex = index;
  updateActive();
}

function updateActive() {
  listItems.forEach((item, i) => {
    item.classList.toggle("active", i === currentIndex);
  });
}

video.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % files.length;
  loadVideo(currentIndex);
});

listItems.forEach((item, index) => {
  item.addEventListener("click", () => loadVideo(index));
});

// Initial load
loadVideo(currentIndex);
