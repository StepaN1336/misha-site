const categoriesContainer = document.querySelector('.production__categories-cards');
let title = null;
let image = null;
let categoriesCount = 0;

fetch('json/categories.json')
    .then(response => response.json())
    .then(jsonContent => {
        for (const categoryKey in jsonContent) {
            if (jsonContent.hasOwnProperty(categoryKey)) {
                const category = jsonContent[categoryKey];
                const title = category.title;
                const image = category.image;
                
                const categoryCard = document.createElement('div');
                categoryCard.classList.add('production__category-card');

                categoryCard.style.backgroundImage = `url(${image})`;
                const titleElement = document.createElement('h2');
                titleElement.textContent = title;
                titleElement.classList.add('production__category-title');
                categoryCard.appendChild(titleElement);

                categoriesContainer.appendChild(categoryCard);
            }
        }

    })
    .catch(err => console.error('Помилка читання файлу:', err));

