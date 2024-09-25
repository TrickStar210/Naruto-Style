// Selecting the DVD logo element
const dvdLogo = document.getElementById('dvd-logo');

// Starting position and speed for movement
let posX = 0;
let posY = 0;
let speedX = 2;  // Speed along X-axis
let speedY = 2;  // Speed along Y-axis

// Getting the container size (the window in this case)
const containerWidth = window.innerWidth - dvdLogo.clientWidth;
const containerHeight = window.innerHeight - dvdLogo.clientHeight;

// Function to move the DVD logo
function moveLogo() {
  // Update the position
  posX += speedX;
  posY += speedY;

  // Reverse direction when hitting the screen edges (X-axis)
  if (posX <= 0 || posX >= containerWidth) {
    speedX = -speedX; // Reverse direction
  }

  // Reverse direction when hitting the screen edges (Y-axis)
  if (posY <= 0 || posY >= containerHeight) {
    speedY = -speedY; // Reverse direction
  }

  // Apply the new position to the DVD logo
  dvdLogo.style.left = posX + 'px';
  dvdLogo.style.top = posY + 'px';

  // Keep moving the logo by calling moveLogo repeatedly
  requestAnimationFrame(moveLogo);
}

// Start the animation
moveLogo();
