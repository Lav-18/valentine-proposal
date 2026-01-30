document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yes");
  const noBtn  = document.getElementById("no");
  const msg    = document.getElementById("finalMsg");

  /* -----------------------------
     YES BUTTON — CINEMATIC MOMENT
  ------------------------------*/
  yesBtn.addEventListener("click", () => {

    // Disable buttons after YES
    yesBtn.disabled = true;
    noBtn.style.display = "none";

    // Small dramatic pause
    setTimeout(() => {
      msg.innerHTML = `
        Thank you for choosing me.<br>
        Every day with you is my favorite place to be 💖
      `;
      msg.classList.add("show");
    }, 700);

    // Soft heart burst (not chaotic)
    for (let i = 0; i < 18; i++) {
      setTimeout(createHeart, i * 120);
    }

    // Slightly increase background music (if exists)
    const music = document.getElementById("bgMusic");
    if (music) {
      music.volume = Math.min(music.volume + 0.2, 0.8);
    }
  });

  /* -----------------------------
     NO BUTTON — PLAYFUL ESCAPE
  ------------------------------*/
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

});

/* --------------------------------
   HEART CREATION — CINEMATIC STYLE
---------------------------------*/
function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.className = "heart";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 18 + "px";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}