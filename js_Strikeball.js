// Фотогалерея
const galleryImages = document.querySelectorAll('.gallery-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
  galleryImages.forEach(image => image.classList.remove('active'));
  galleryImages[index].classList.add('active');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);
}

// Валидация формы контактов
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      messageDiv.textContent = 'Пожалуйста, заполните все поля.';
      messageDiv.style.color = 'red';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageDiv.textContent = 'Введите корректный email.';
      messageDiv.style.color = 'red';
      return;
    }

    // Имитация отправки формы
    messageDiv.textContent = 'Сообщение отправлено! Спасибо за обращение.';
    messageDiv.style.color = 'green';
    form.reset();
  });
});