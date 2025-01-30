const categoriesContainer = document.querySelector('.production__categories-cards');

fetch('json/categories.json')
    .then(response => response.json())
    .then(jsonContent => {
        categoriesContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        for (const categoryKey in jsonContent) {
            if (jsonContent.hasOwnProperty(categoryKey)) {
                const { title, image, htmlPage } = jsonContent[categoryKey];

                const link = document.createElement('a');
                link.href = htmlPage;
                link.classList.add('production__card-link');
                link.setAttribute('aria-label', title);

                const categoryCard = document.createElement('div');
                categoryCard.classList.add('production__category-card');
                categoryCard.dataset.bg = image;
                categoryCard.style.backgroundPosition = 'center center';

                const titleElement = document.createElement('h2');
                titleElement.textContent = title;
                titleElement.classList.add('production__category-title');

                categoryCard.appendChild(titleElement);
                link.appendChild(categoryCard);
                fragment.appendChild(link);
            }
        }

        categoriesContainer.appendChild(fragment);
        lazyLoadBackgrounds();
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
