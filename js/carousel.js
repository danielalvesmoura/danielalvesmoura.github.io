const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const cardWidth = 216; // largura do card + gap

nextBtn.addEventListener('click', () => {
  currentIndex++;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});