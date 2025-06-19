// Sidebar video switching
document.querySelectorAll("#videoList li").forEach(item => {
  item.addEventListener("click", () => {
    const selected = item.getAttribute("data-video");
    video.src = `videos/${selected}.mp4`;
    video.play();
    playButton.textContent = symbolPause;
  });
});

