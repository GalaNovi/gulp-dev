'use strict';

(() => {
  const buttonElement = document.querySelector('.button-up'); // Кнопка скролла в начало страницы

  window.utils = {
    scrollTop: () => { // Функция прокручивает страницу в начало
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
    }
  };

  if (buttonElement) {
    const onPageScroll = () => { // Добавляет/удаляет класс кнопки
      if(document.documentElement.scrollTop >= innerHeight * 0.6) {
        buttonElement.classList.add('button-up--visible');
      } else {
        buttonElement.classList.remove('button-up--visible');
      }
    };
    
    buttonElement.addEventListener('click', window.utils.scrollTop);
    document.addEventListener('scroll', onPageScroll);
  }
})();