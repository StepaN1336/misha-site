export async function cardRender(jsonUrl, pageTitle) {
    const productPageTitle = document.querySelector('.production__title');
    productPageTitle.textContent = pageTitle;

    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const products = await response.json();
        const container = document.querySelector('.production__cards-container');
        if (!container) throw new Error('Container not found');
        
        if (Array.isArray(products)) {
            container.innerHTML = products.map(product => `
                <div class="production__card">
                    <div class="production__image-wrap">
                        <img src="${product.image}" alt="${product.title}" class="production__card-image" loading="lazy">
                    </div>
                    <h2 class="production__card-title">${product.title}</h2>
                </div>
            `).join('');
        } else {
            console.error('Products is not an array:', products);
        }

        container.classList.remove("skeleton");

    } catch (error) {
        console.error(error);
    }
}
