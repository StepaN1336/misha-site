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
                    const offers = vacancy.offers;
                    const hr = document.createElement('hr');

                    const vacancyCard = document.createElement('div');
                    vacancyCard.classList.add('vacancy__card');

                    const vacancyTitle = document.createElement('h2');
                    vacancyTitle.classList.add('vacancy__card-title');
                    vacancyTitle.textContent = name;

                    const vacancyDescription = document.createElement('p');
                    vacancyDescription.classList.add('vacancy__card-description');
                    vacancyDescription.textContent = description;

                    const weRequireText = document.createElement('h3');
                    weRequireText.classList.add('vacancy__lists-header');
                    weRequireText.textContent = 'Наші вимоги:'

                    const requirementsList = document.createElement('ul');
                    requirementsList.classList.add('vacancy__card-list');

                    const weOfferText = document.createElement('h3');
                    weOfferText.classList.add('vacancy__lists-header');
                    weOfferText.textContent = 'Ми пропонуємо:'

                    const offersList = document.createElement('ul');
                    offersList.classList.add('vacancy__card-list');

                    for (const req of requirements) {
                        const reqListItem = document.createElement('li');
                        reqListItem.classList.add('vacancy__card-list-item');
                        reqListItem.textContent = req;
                        requirementsList.appendChild(reqListItem);
                    }

                    for (const offer of offers) {
                        const offerListItem = document.createElement('li');
                        offerListItem.classList.add('vacancy__card-list-item');
                        offerListItem.textContent = offer;
                        offersList.appendChild(offerListItem);
                    }

                    vacancyCard.appendChild(vacancyTitle);
                    vacancyCard.appendChild(vacancyDescription);
                    if(!requirements.length < 1) {
                        vacancyCard.appendChild(weRequireText);
                        vacancyCard.appendChild(requirementsList);
                    }
                    if(!offers.length < 1) {
                        vacancyCard.appendChild(weOfferText);
                        vacancyCard.appendChild(offersList);
                    }
                    vacanciesContainer.appendChild(vacancyCard);
                    vacanciesContainer.appendChild(hr);
                }
            }

        })
        .catch(err => console.error('Помилка при зчитуванні з файлу:', err));
}

document.addEventListener('partialsLoaded', () => {
    cardRender("./json/vacancies.json");
});
