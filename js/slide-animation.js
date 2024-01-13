document.addEventListener('DOMContentLoaded', function () {
    const newsAnimationContainer = document.querySelector('.news__wrapper');
    const featuresAnimationContainer = document.querySelector('.features_wrapper');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-animation');
            }
        });
    });

    observer.observe(newsAnimationContainer);
    observer.observe(featuresAnimationContainer);
});