// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;
let images = [];

document.querySelectorAll('.lightbox-trigger').forEach((item, index) => {
    images.push({
        src: item.href,
        title: item.getAttribute('data-title')
    });

    item.addEventListener('click', event => {
        event.preventDefault();
        currentImageIndex = index;
        showImage();
    });
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

function showImage() {
    lightbox.style.display = 'block';
    lightboxImg.src = images[currentImageIndex].src;
    captionText.innerHTML = images[currentImageIndex].title;
}
