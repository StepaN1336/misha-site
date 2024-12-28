const examples = [
    {
        id: 1,
        title: 'Точно знайдеш щось для себе!',
        description: 'Різноманітні ковбаски, сосиски, делікатеси, копчені вироби та навіть тваринний корм та випічка. Ми пропонуємо кожному клієнту вибір, зробивши який, кожен клінєт залишиться задоволеним. Кожна позиція вирізняється свіжістю та якістю, адже ми піклуємося про безпеку кожного клієнта та репутацію торгової марки',
        image: 'images/Ковбаски-грильові/Ковбаски-білі-з-зеленню.webp',
        alt: 'Приклад вироба'
    },
    {
        id: 2,
        title: 'Смачність на кожен день!',
        description: 'Для вашої зручності все це ми зібрали для вас тут, тому перш ніж завітати до нас в гості, можете підшукати апетитну ковбаску, що вам сподобається. Після вибору з нашого каталогу, ви легко можете знайти найближчий до вас магазин також саме тут, на нашому сайті.',
        image: 'images/Запечене/Хлібець-індичка.webp',
        alt: 'Приклад вироба'
    }
]

function renderExamples(examples) {
    const examplesContainer = document.querySelector('.find-production__example');
    for(const example of examples) {
        const exampleCard = document.createElement('div');
        const textContentContainer = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        
        image.setAttribute('src', example.image);
        image.setAttribute('alt', example.alt);
        image.setAttribute('loading', 'lazy');
        image.classList.add('example__image');

        title.textContent = example.title;
        title.classList.add('example__title');

        description.textContent = example.description;
        description.classList.add('example__description');

        textContentContainer.appendChild(title);
        textContentContainer.appendChild(description);
        textContentContainer.classList.add('example__text-content-container');

        exampleCard.appendChild(image);
        exampleCard.appendChild(textContentContainer);
        exampleCard.classList.add('example__card');

        examplesContainer.appendChild(exampleCard);
    }
}

renderExamples(examples);