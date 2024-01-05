document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.getElementById('slider-container');
    const heading = document.getElementById('heading');

    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;

        const sliderOpacity = 1 - scrollPos / sliderContainer.offsetHeight;
        document.getElementById('slider').style.opacity = sliderOpacity;

        const headingOpacity = 1 - scrollPos / (sliderContainer.offsetHeight / 2);
        heading.style.opacity = headingOpacity;
        heading.style.transform = `translateY(${Math.max(0, scrollPos - sliderContainer.offsetHeight)}px)`;
    });
});
let currentIndex = 0;
        const images = document.querySelectorAll('#slider img');
        const totalImages = images.length;

        document.getElementById('next').addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add('active');
        });

        document.getElementById('prev').addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            images[currentIndex].classList.add('active');
        });