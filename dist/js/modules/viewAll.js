function viewAll() {
    const wrapStoreProduct = document.querySelector('.store__wrap-block-store'),
        wraplinkStore = document.querySelector('.wrap-block-store__btn'),
        contentStore = document.querySelectorAll('.wrap-block-store__block-store');


    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerText = 'View All Products';
    wraplinkStore.append(link);

    function visible(display) {
        contentStore.forEach(el => {
            if (!el.classList.contains('visible')) {
                el.style.display = display;
            }
        });
    }
    visible('none');


    link.addEventListener('click', e => {
        wrapStoreProduct.classList.toggle('active');
        e.preventDefault();

        if (wrapStoreProduct.classList.contains('active')) {

            link.innerText = 'Hide All Products';
            visible('block');


        } else {

            link.innerText = 'View All Products';
            visible('none');

        }

    });


}
export default viewAll;

