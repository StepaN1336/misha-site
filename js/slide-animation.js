const newsAnimationContainer = document.querySelector('.news__wrapper');
const featuresAnimationContainer = document.querySelector('.features__wrapper');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-animation');
            observer.unobserve(entry.target);
            console.log('end');
        }
    });
});

observer.observe(newsAnimationContainer);
observer.observe(featuresAnimationContainer);
console.log('end');
