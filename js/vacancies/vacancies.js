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
                    vacancyTitle.textContent = name;
                    const vacancyDescription = document.createElement('p');
                    vacancyDescription.textContent = description;
                    const requirementsList = document.createElement('ul');

                    for (const req of requirements) {
                        const reqListItem = document.createElement('li');
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
    cardRender("../json/vacancies.json");
});
