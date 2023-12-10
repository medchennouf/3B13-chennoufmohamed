
let moveRight = true;

function moveImage() {
  const image = document.getElementById('portfolioImage');
  if (moveRight) {
    image.style.transform = 'translateX(50px)';
  } else {
    image.style.transform = 'translateX(-50px)';
  }
  moveRight = !moveRight;
}

function resetImage() {
  document.getElementById('portfolioImage').style.transform = 'translateX(0)';
}
