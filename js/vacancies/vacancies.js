function cardRender(json) {
    const vacanciesContainer = document.querySelector('.vacnacy__container');

    fetch(json)
        .then(response => response.json())
        .then(jsonContent => {
            for (const vacancyKey in jsonContent) {
                if (jsonContent.hasOwnProperty(vacancyKey)) {
                    const vacancy = jsonContent[vacancyKey];
                    const name = vacancy.name;
                    const description = vacancy.description;
                    const requirements = vacancy.requirements;

                    const vacancyCard = document.createElement('div');
                    vacancyCard.classList.add('vacancy__card');
                    const vacancyTitle = document.createElement('h2');
                    vacancyTitle.classList.add('vacancy__card-title');
                    vacancyTitle.textContent = name;
                    const vacancyDescription = document.createElement('p');
                    vacancyDescription.classList.add('vacancy__card-description');
                    vacancyDescription.textContent = description;
                    const requirementsList = document.createElement('ul');
                    requirementsList.classList.add('vacancy__card-list');

                    for (const req of requirements) {
                        const reqListItem = document.createElement('li');
                        reqListItem.classList.add('vacancy__card-list-item');
                        reqListItem.textContent = req;
                        requirementsList.appendChild(reqListItem);
                    }

                    vacancyCard.appendChild(vacancyTitle);
                    vacancyCard.appendChild(vacancyDescription);
                    vacancyCard.appendChild(requirementsList);
                    console.log(vacanciesContainer);
                    vacanciesContainer.appendChild(vacancyCard);
                }
            }

        })
        .catch(err => console.error('Помилка при зчитуванні з файлу:', err));
}

document.addEventListener('partialsLoaded', () => {
    cardRender("./json/vacancies.json");
});
