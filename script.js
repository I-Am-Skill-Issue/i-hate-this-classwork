const changeImageBtn = document.getElementById('changeImageBtn');
const mainImage = document.getElementById('mainImage');
const images = ['image1.jpg', 'image2.jpg']; // List of image filenames

let currentImageIndex = 0;

changeImageBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  mainImage.src = 'images/' + images[currentImageIndex];
});