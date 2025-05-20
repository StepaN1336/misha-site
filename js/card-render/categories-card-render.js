const categoriesContainer = document.querySelector('.production__categories-cards');
const cardsContainer = document.querySelector('.production__cards-container');
const productPageTitle = document.querySelector('.production__title');
const backButton = document.querySelector('.back-button');

fetch('json/categories.json')
    .then(response => response.json())
    .then(jsonContent => {
        categoriesContainer.innerHTML = '';

        let htmlContent = '';

        for (const categoryKey in jsonContent) {
            if (jsonContent.hasOwnProperty(categoryKey)) {
                const { title, image, jsonPage } = jsonContent[categoryKey];

                htmlContent += `
                    <a href="#" 
                       class="production__card-link" 
                       data-json="${jsonPage}" 
                       data-title="${title}" 
                       aria-label="${title}">
                        <div class="production__category-card" 
                             data-bg="${image}" 
                             style="background-position: center center;">
                            <h2 class="production__category-title">${title}</h2>
                        </div>
                    </a>
                `;
            }
        }

        categoriesContainer.innerHTML = htmlContent;

        lazyLoadBackgrounds();
        categoriesContainer.classList.remove("skeleton");
    })
    .catch(err => console.error('Помилка читання файлу:', err));

function lazyLoadBackgrounds() {
    const cards = document.querySelectorAll('.production__category-card');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.style.backgroundImage = `url(${card.dataset.bg})`;
                observer.unobserve(card);
            }
        });
    }, { rootMargin: '100px' });

    cards.forEach(card => observer.observe(card));
}

categoriesContainer.addEventListener('click', async (e) => {
    const link = e.target.closest('.production__card-link');
    if (!link) return;

    e.preventDefault();

    const jsonUrl = link.dataset.json;
    const pageTitle = link.dataset.title;

    categoriesContainer.style.display = 'none';
    backButton.style.display = 'inline-block';

    await cardRender(jsonUrl, pageTitle);
});

backButton.addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    cardsContainer.style.display = 'none';
    categoriesContainer.style.display = 'flex';
    productPageTitle.textContent = 'Каталог продукції';
    backButton.style.display = 'none';
});

async function cardRender(jsonUrl, pageTitle) {
    if (productPageTitle) {
        productPageTitle.textContent = pageTitle;
    }

    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Не вдалося завантажити дані');

        const products = await response.json();

        if (!Array.isArray(products)) {
            console.error('Очікувався масив, отримано:', products);
            return;
        }

        if (!cardsContainer) {
            console.error('Контейнер товарів не знайдено');
            return;
        }

        cardsContainer.innerHTML = products.map(product => `
            <div class="production__card">
                <div class="production__image-wrap">
                    <img src="${product.image}" 
                         alt="${product.title}" 
                         class="production__card-image" 
                         loading="lazy">
                </div>
                <h2 class="production__card-title">${product.title}</h2>
            </div>
        `).join('');

        cardsContainer.classList.remove("skeleton");

    } catch (error) {
        console.error('Помилка завантаження товарів:', error);
    }
}
