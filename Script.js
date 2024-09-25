const dvdLogo = document.getElementById('dvdLogo');
const container = document.getElementById('container');

let x = Math.random() * (container.offsetWidth - dvdLogo.offsetWidth);
let y = Math.random() * (container.offsetHeight - dvdLogo.offsetHeight);
let xSpeed = 2;
let ySpeed = 2;

function updatePosition() {
    x += xSpeed;
    y += ySpeed;

    // Bounce off the sides
    if (x <= 0 || x + dvdLogo.offsetWidth >= container.offsetWidth) {
        xSpeed = -xSpeed;
    }
    if (y <= 0 || y + dvdLogo.offsetHeight >= container.offsetHeight) {
        ySpeed = -ySpeed;
    }

    dvdLogo.style.left = x + 'px';
    dvdLogo.style.top = y + 'px';
    
    requestAnimationFrame(updatePosition);
}

// Start the animation
updatePosition();
