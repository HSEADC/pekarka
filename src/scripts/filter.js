// Фильтрация по тегам кухонь
const multiSelectOptions = [];

function updateSelectData(option) {
  multiSelectOptions.forEach((o) => {
    if (o.text === option.text) {
      o.active = !option.active;
    }
  });
}

function updateSelectOptionList() {
  const optionList = document.querySelector('.C_All_Cuisine_Tag_Row');
  
  // Очищаем текущие кнопки
  optionList.innerHTML = '';
  
  // Добавляем кнопку "Все" в начало
  const allButton = document.createElement('button');
  allButton.classList.add('A_All_Cuisine_Tag', 'active');
  allButton.innerText = 'все';
  allButton.addEventListener('click', () => {
    multiSelectOptions.forEach(opt => opt.active = false);
    updateContent();
    document.querySelectorAll('.A_All_Cuisine_Tag').forEach(btn => {
      btn.classList.remove('active');
    });
    allButton.classList.add('active');
  });
  optionList.appendChild(allButton);

  // Добавляем остальные кнопки тегов
  multiSelectOptions.forEach((option) => {
    const { text, active } = option;
    const listItem = document.createElement('button');
    listItem.classList.add('A_All_Cuisine_Tag');
    if (active) listItem.classList.add('active');
    listItem.innerText = text;

    listItem.addEventListener('click', () => {
      listItem.classList.toggle('active');
      updateSelectData(option);
      updateContent();
      
      // Обновляем состояние кнопки "все"
      const anyActive = multiSelectOptions.some(opt => opt.active);
      document.querySelector('.C_All_Cuisine_Tag_Row button:first-child').classList.toggle('active', !anyActive);
    });

    optionList.appendChild(listItem);
  });
}

function initMultiSelect() {
  // Получаем все уникальные теги кухонь
  getContentCardDataTags().forEach((tag) => {
    multiSelectOptions.push({
      text: tag,
      active: false
    });
  });
}

// Получаем теги кухонь из карточек
function getContentCardDataTags() {
  const contentCards = document.querySelectorAll('.O_Recipe_Card');
  const tags = [];
  
  contentCards.forEach((contentCard) => {
    const cuisineTag = contentCard.querySelector('.A_Cuisine_Tag').textContent.trim();
    if (cuisineTag && !tags.includes(cuisineTag)) {
      tags.push(cuisineTag);
    }
  });
  
  return tags;
}

// Фильтрация контента
function updateContent() {
  const contentCards = document.querySelectorAll('.O_Recipe_Card');
  const selectedTags = multiSelectOptions.filter(opt => opt.active).map(opt => opt.text);

  // Если не выбрано ни одного тега, показываем все карточки
  if (selectedTags.length === 0) {
    contentCards.forEach(card => {
      card.closest('a').style.display = 'block';
    });
    return;
  }

  // Фильтруем карточки
  contentCards.forEach((contentCard) => {
    const cardCuisine = contentCard.querySelector('.A_Cuisine_Tag').textContent.trim();
    const shouldShow = selectedTags.includes(cardCuisine);
    contentCard.closest('a').style.display = shouldShow ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMultiSelect();
  updateSelectOptionList();
});