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
    
    // Определяем индексы для левого и правого отзыва
    const leftIndex = index * 2;
    const rightIndex = leftIndex + 1;
    
    // Показываем левый отзыв
    if (leftIndex < reviews.length) {
        reviewLeft.appendChild(reviews[leftIndex].cloneNode(true));
    }
    
    // Показываем правый отзыв
    if (rightIndex < reviews.length) {
        reviewRight.appendChild(reviews[rightIndex].cloneNode(true));
    } else {
        // Если правый отзыв не существует, копируем левый
        if (leftIndex < reviews.length) {
            reviewRight.appendChild(reviews[leftIndex].cloneNode(true));
        }
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
    // Вычисляем максимальное значение индекса
    const maxIndex = Math.ceil(reviews.length / 2) - 1;
    
    if (currentIndex < maxIndex) {
        currentIndex++;
        showReviews(currentIndex);
    }
});

// Инициализация при загрузке
window.onload = () => {
    showReviews(currentIndex);
};