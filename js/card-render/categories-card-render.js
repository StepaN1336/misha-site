const categoriesContainer = document.querySelector('.production__categories-cards');

fetch('json/categories.json')
    .then(response => response.json())
    .then(jsonContent => {
        for (const categoryKey in jsonContent) {
            if (jsonContent.hasOwnProperty(categoryKey)) {
                const category = jsonContent[categoryKey];
                const title = category.title;
                const image = category.image;
                const htmlUrl = category.htmlPage;

                const link = document.createElement('a');
                link.href = htmlUrl;
                link.classList.add('production__card-link')

                const categoryCard = document.createElement('div');
                categoryCard.classList.add('production__category-card');
                categoryCard.style.backgroundImage = `url(${image})`;
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = title;
                titleElement.classList.add('production__category-title');
                categoryCard.appendChild(titleElement);

                link.appendChild(categoryCard);

                categoriesContainer.appendChild(link);
            }
        }

    })
    .catch(err => console.error('Помилка читання файлу:', err));
