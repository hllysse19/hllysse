let music = document.getElementById("bgMusic");
let musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸ Stop Music";
    } else {
        music.pause();
        musicBtn.textContent = "▶︎•၊၊||၊|။|||| |";
    }
}

function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    let size = Math.random() * 80 + 90; // Random petal size
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    petal.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    petal.style.animationDuration = Math.random() * 5 + 3 + "s"; // Random fall speed

    document.getElementById("petal-container").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000); // Remove after animation ends
}

// Generate petals every 1 second
setInterval(createPetal, 500);
