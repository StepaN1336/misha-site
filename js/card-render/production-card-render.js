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
                    <img src="${product.image}" alt="${product.title}" class="production__card-image" loading="lazy">
                    <h3 class="production__card-title">${product.title}</h3>
                </div>
            `).join('');
        } else {
            console.error('Products is not an array:', products);
        }
    } catch (error) {
        console.error(error);
    }
}
