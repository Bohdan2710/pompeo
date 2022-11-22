function arrowUp() {

    const arrowUp = document.querySelector('.arrow-up');

    window.addEventListener('scroll', () => {

        const coordinates = window.pageYOffset || document.documentElement.scrollTop;
        const arrowActive = 615;

        if (coordinates >= arrowActive) {
            arrowUp.classList.add('active');
        } else {
            arrowUp.classList.remove('active');
        }

    });

    arrowUp.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

}

export default arrowUp;