fetch('json/categories.json')
    .then(response => response.json())
    .then(jsonContent => {
        categoriesContainer.innerHTML = Object.values(jsonContent)
            .map(({ title, image, htmlPage: htmlUrl }) => `
                <a href="${htmlUrl}" class="production__card">
                    <div class="production__card-img-wrapper">
                        <img src="${image}" loading="lazy" alt="${title}" class="production__card-img">
                    </div>
                    <h2 class="production__card-title">${title}</h2>
                </a>
            `).join('');
    })
    .catch(err => console.error('Помилка читання файлу:', err));
