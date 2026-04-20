document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero__slide');
    let currentIndex = 0;
    const intervalTime = 6000; 
    
    if (slides.length === 0) return;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    showSlide(0);
    setInterval(nextSlide, intervalTime);
});