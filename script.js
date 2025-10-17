// BURGER MENU

const menuIcon = document.querySelector('.burger-menu-btn');
const menu = document.querySelector('.burger-menu');
const main = document.querySelector('main')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
    main.classList.toggle('active')
});

// REVIEW SLIDER 

const reviewLeft = document.querySelector('.review-left');
const reviewRight = document.querySelector('.review-right');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const reviewArray = document.querySelector('.main-reviews-block-list');
const reviews = Array.from(reviewArray.querySelectorAll('.main-reviews-block-list-item'));

// Инициализируем переменные
let currentIndex = 0;

// Функция для отображения отзывов
function showReviews(index) {
    // Очищаем текущие отзывы
    reviewLeft.innerHTML = '';
    reviewRight.innerHTML = '';
    
    // Показываем левый отзыв
    reviewLeft.appendChild(reviews[index].cloneNode(true));
    
    // Показываем правый отзыв
    if (index + 1 < reviews.length) {
        reviewRight.appendChild(reviews[index + 1].cloneNode(true));
    } else {
        reviewLeft.classList.add('single-review');
        reviewRight.classList.add('none-review')
    }

    if (reviewRight.innerHTML.trim() !== '') {
        reviewLeft.classList.remove('single-review');
        reviewRight.classList.remove('none-review');
    }
}

// Обработчики событий
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showReviews(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
        currentIndex++;
        showReviews(currentIndex);
    }
});

// Инициализация - показываем первые два отзыва
showReviews(0);