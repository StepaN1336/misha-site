const examples = [
    {
        id: 1,
        title: 'Точно знайдеш щось для себе!',
        description: 'Різноманітні ковбаски, сосиски, делікатеси, копчені вироби та навіть тваринний корм та випічка.',
        image: 'images/копчені-вироби/test.jpg',
        alt: 'Приклад вироба'
    },
    {
        id: 2,
        title: 'Смачність на кожен день!',
        description: 'Для вашої зручності все це ми зібрали для вас тут, тому перш ніж завітати до нас в гості, можете підшукати апетитну ковбаску, що вам сподобається',
        image: 'images/копчені-вироби/test.jpg',
        alt: 'Приклад вироба'
    }
]

renderExamples(examples);

function renderExamples(examples) {
    const examplesContainer = document.querySelector('.find-production__example');
    for(const example of examples) {
        const exampleCard = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        
        image.setAttribute('src', example.image);
        image.setAttribute('alt', example.alt);
        image.classList.add('example__image');

        title.textContent = example.title;
        title.classList.add('example__title');

        description.textContent = example.description;
        description.classList.add('example__description');

        exampleCard.appendChild(image);
        exampleCard.appendChild(title);
        exampleCard.appendChild(description);
        exampleCard.classList.add('example__card');

        examplesContainer.appendChild(exampleCard);
    }
}