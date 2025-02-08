const categoriesContainer = document.querySelector('.production__categories-cards');

fetch('json/categories.json')
    .then(response => response.json())
    .then(jsonContent => {
        categoriesContainer.innerHTML = '';

        let htmlContent = '';

        for (const categoryKey in jsonContent) {
            if (jsonContent.hasOwnProperty(categoryKey)) {
                const { title, image, htmlPage } = jsonContent[categoryKey];

                htmlContent += `
                    <a href="${htmlPage}" class="production__card-link" aria-label="${title}">
                        <div class="production__category-card" data-bg="${image}" style="background-position: center center;">
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
