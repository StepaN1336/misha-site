export function cardRender(json, productionTitle) {
    const bakingContainer = document.querySelector('.production__cards-container');
    const productTitle = document.querySelector('.production__title');
    const loadMoreBtn = document.createElement('button');

    productTitle.textContent = productionTitle;
    bakingContainer.innerHTML = '';

    const loadMoreContainer = document.createElement('div');
    loadMoreContainer.classList.add('production__load-more-container');

    loadMoreBtn.textContent = 'Завантажити ще';
    loadMoreBtn.classList.add('production__load-more-btn');

    loadMoreContainer.appendChild(loadMoreBtn);
    bakingContainer.after(loadMoreContainer);

    let items = [];
    let index = 0;
    const chunkSize = 10;

    fetch(json)
        .then(response => response.json())
        .then(jsonContent => {
            items = Object.values(jsonContent);
            renderChunk();
        })
        .catch(err => console.error('Помилка читання файлу:', err));

    function renderChunk() {
        const fragment = document.createDocumentFragment();
        for (let i = index; i < index + chunkSize && i < items.length; i++) {
            const { title, image } = items[i];

            const categoryCard = document.createElement('div');
            categoryCard.classList.add('production__card');

            const categoryImage = document.createElement('img');
            categoryImage.dataset.src = image;
            categoryImage.setAttribute('alt', title);
            categoryImage.classList.add('production__card-image', 'lazy-load');

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = title;
            categoryTitle.classList.add('production__card-title');

            categoryCard.append(categoryImage, categoryTitle);
            fragment.appendChild(categoryCard);
        }
        bakingContainer.appendChild(fragment);

        index += chunkSize;
        if (index >= items.length) {
            loadMoreBtn.style.display = 'none';
        }

        lazyLoadImages();
    }

    function lazyLoadImages() {
        const images = document.querySelectorAll('.lazy-load');
        const maxConcurrentLoad = 3;
        let activeLoads = 0;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && activeLoads < maxConcurrentLoad) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    activeLoads++;

                    img.onload = () => {
                        activeLoads--;
                    };

                    obs.unobserve(img);
                }
            });
        }, { rootMargin: '200px', threshold: 0.1 });

        images.forEach(img => observer.observe(img));
    }



    loadMoreBtn.addEventListener('click', renderChunk);
}
