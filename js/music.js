document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  // Restore state
  const isPlaying = localStorage.getItem("musicPlaying");

  if (isPlaying === "true") {
    music.volume = 0.5;
    music.play().catch(() => {});
  }

  // Toggle music
  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      localStorage.setItem("musicPlaying", "true");
      btn.innerText = "🔊";
    } else {
      music.pause();
      localStorage.setItem("musicPlaying", "false");
      btn.innerText = "🔈";
    }
  });
});