// BURGER MENU

const menuIcon = document.querySelector('.burger-menu-btn');
const menu = document.querySelector('.burger-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

// REVIEW SLIDER 

const slider = document.querySelector('.main-reviews-block-list')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const slides = Array.from(slider.querySelectorAll('.main-reviews-block-list-item'))
const slideCount = slides.length
let slideIndex = 0

btnPrev.addEventListener('click', showPreviousSlide)
btnNext.addEventListener('click', showNextSlide)

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount
    updateSlider()
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount
    updateSlider()
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block'
        } else {
            slide.style.display = 'none'
        }
    })
}

updateSlider()