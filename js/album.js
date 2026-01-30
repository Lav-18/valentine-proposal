document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     IMAGE ALBUM LOGIC
  ==========================*/

  let current = 1;
  const total = 8;

  const img = document.getElementById("albumImage");
  const counter = document.getElementById("imageCounter");

  function updateImage() {
    img.src = `assets/images/${current}.jpg`;
    counter.innerText = `${current} / ${total}`;
  }

  window.nextImage = function () {
    if (current < total) current++;
    updateImage();
  };

  window.prevImage = function () {
    if (current > 1) current--;
    updateImage();
  };

  updateImage();


  /* =========================
     VIDEO CONTROL LOGIC
  ==========================*/

  const video  = document.getElementById("memoryVideo");
  const camera = document.querySelector(".camera");
  const playBtn  = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  // PLAY VIDEO
  window.playVideo = function () {
    video.play();
    camera.classList.add("playing");

    playBtn.style.opacity = 0;
    playBtn.style.pointerEvents = "none";
  };

  // PAUSE VIDEO
  window.pauseVideo = function () {
    video.pause();
    camera.classList.remove("playing");

    playBtn.style.opacity = 1;
    playBtn.style.pointerEvents = "auto";
  };

});