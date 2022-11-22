function viewDetails() {
    const linksVases = document.querySelectorAll('.content-vases__link'),
        blockList = document.querySelectorAll('.content-vases__list'),
        blockVases = document.querySelectorAll('.block-vases__content-vases');

    blockVases.forEach((el, i) => {
        linksVases[i].addEventListener('click', e => {
            e.preventDefault();

            el.classList.toggle('active');
            blockList[i].classList.toggle('active');

        });
    });
}

export default viewDetails;