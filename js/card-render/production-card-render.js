export async function cardRender(json, productionTitle) {
    try {
        const bakingContainer = document.querySelector('.production__cards-container');
        const productTitle = document.querySelector('.production__title');

        if (!bakingContainer || !productTitle) {
            console.error('Помилка: Контейнери для рендерингу не знайдено.');
            return;
        }

        productTitle.textContent = productionTitle;

        const response = await fetch(json);
        if (!response.ok) {
            throw new Error(`HTTP помилка: ${response.status}`);
        }

        const jsonContent = await response.json();

        bakingContainer.innerHTML = '';

        const fragment = document.createDocumentFragment();

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

                fragment.appendChild(categoryCard);
            }
        }

        bakingContainer.appendChild(fragment);

    } catch (err) {
        console.error('Помилка рендерингу:', err);
    }
}
