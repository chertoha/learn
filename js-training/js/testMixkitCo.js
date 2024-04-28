// Добрий день

// Заготував селектори
//.item-grid-item
//div[data-audio-player-preview-url-value]
//p.item-grid-music-preview__author

// Спочатку отримуємо доступ до списку елементів
const list = document.querySelectorAll('.item-grid-item');

// Створюємо результуючий масив
const result = [];

//Пробігаємось по списку елементів
list.forEach(item => {
  // Знаходимо посилання на елементи з потрібною інформацією
  const refAudio = item.querySelector('div[data-audio-player-preview-url-value]');
  const refTitle = item.querySelector('h2.item-grid-card__title');
  const refAuthor = item.querySelector('p.item-grid-music-preview__author');

  //Додаємо у масив об'єкт із даними на кожній ітерації
  result.push({
    title: refTitle.innerHTML.trim(),
    author: refAuthor.innerHTML.trim(),
    mp3: refAudio.dataset.audioPlayerPreviewUrlValue,
  });
});

//Виводимо масив у консоль
console.log(result);
