const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    const movieList = movieLists[i];
    const imgItems = movieList.querySelectorAll('img').length;
    let clickCounter = 0;
    let currentTranslateX = 0;

    arrow.addEventListener('click', function () {
        const itemWidth = movieList.querySelector('img')?.offsetWidth || 300; // fallback
        const visibleItemsCount = Math.floor(movieList.offsetWidth / itemWidth);

        clickCounter++;

        if (imgItems - (clickCounter + visibleItemsCount) >= 0) {
            currentTranslateX -= itemWidth;
            movieList.style.transform = `translateX(${currentTranslateX}px)`;
        } else {
            movieList.style.transform = 'translateX(0)';
            currentTranslateX = 0;
            clickCounter = 0;
        }
    });
});


/* dark mode  */
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select");

ball.addEventListener('click', function () {
    items.forEach(item => item.classList.toggle("active"));
   


})