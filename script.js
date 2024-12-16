// Функция для отображения сведений об ИИ при клике на карточку
function showDetails(name, description) {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${name}</h2>
            <p>${description}</p>
        </div>
    `;
    
    // Добавляем модальное окно в документ
    document.body.appendChild(modal);

    // Показываем модальное окно
    modal.style.display = 'block';

    // Закрытие модального окна при нажатии на кнопку
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });

    // Закрытие окна при клике за его пределами
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const items = document.querySelectorAll(".carousel-item");

    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= items.length) index = 0;
        carouselSlide.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveCarousel, 3000); // Автоматическое переключение каждые 3 секунды
});
