const bakingContainer = document.querySelector('.fresh-meat-list__cards');

fetch('json/fresh-meat.json')
    .then(response => response.json())
    .then(jsonContent => {
        for (const categoryKey in jsonContent) {
            if (jsonContent.hasOwnProperty(categoryKey)) {
                const category = jsonContent[categoryKey];
                const title = category.title;
                const image = category.image;

                const categoryCard = document.createElement('div');
                categoryCard.classList.add('fresh-meat-list__card');
                categoryCard.style.backgroundImage = `url(${image})`;
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = title;
                titleElement.classList.add('fresh-meat-list__card-title');
                categoryCard.appendChild(titleElement);

                bakingContainer.appendChild(categoryCard);
            }
        }

    })
    .catch(err => console.error('Помилка читання файлу:', err));
