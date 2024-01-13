const newsAnimationContainer = document.querySelector('.news__wrapper');
const featuresAnimationContainer = document.querySelector('.features_wrapper');
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('fade-in-animation');
        }
    });
});

observer.observe(newsAnimationContainer);
observer.observe(featuresAnimationContainer);