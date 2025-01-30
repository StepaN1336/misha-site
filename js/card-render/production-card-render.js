export function cardRender(json, productionTitle) {

    const bakingContainer = document.querySelector('.production__cards-container');
    const productTitle = document.querySelector('.production__title');
    productTitle.textContent = productionTitle;

    fetch(json)
        .then(response => response.json())
        .then(jsonContent => {
            for (const categoryKey in jsonContent) {
                if (jsonContent.hasOwnProperty(categoryKey)) {
                    const category = jsonContent[categoryKey];
                    const title = category.title;
                    const image = category.image;

                    const categoryCard = document.createElement('div');
                    categoryCard.classList.add('production__card');

                    const categoryImage = document.createElement('img');
                    categoryImage.setAttribute('src', image);
                    categoryImage.classList.add('production__card-image');

                    const categoryTitle = document.createElement('h2');
                    categoryTitle.textContent = title;
                    categoryTitle.classList.add('production__card-title');

                    categoryCard.appendChild(categoryImage);
                    categoryCard.appendChild(categoryTitle);

                    bakingContainer.appendChild(categoryCard);
                }
            }

        })
        .catch(err => console.error('Помилка читання файлу:', err));
}