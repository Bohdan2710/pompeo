function readeMoreStore() {
    const blocksStore = document.querySelectorAll('.block-store__content'),
        links = document.querySelectorAll('.content__link'),
        wrapImg = document.querySelectorAll('.content__img-wrap');

    blocksStore.forEach((el, i) => {
        const ul = document.createElement('ul'),
            div = document.createElement('div');
        div.classList.add('content__close-content');

        links[i].addEventListener('click', e => {
            e.preventDefault();

            el.classList.toggle('active');
            document.body.classList.toggle('lock');

            if (!el.classList.contains('visible')) {
                el.style.display = '';
            }

            if (el.classList.contains('active')) {

                ul.innerHTML = `
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                `;
                el.append(ul);
                el.append(div);

            } else {

                ul.remove();
                div.remove();

            }
        });

        wrapImg[i].addEventListener('click', e => {
            e.preventDefault();

            el.classList.add('active');
            document.body.classList.add('lock');

            if (!el.classList.contains('visible')) {
                el.style.display = '';
            }

            if (el.classList.contains('active')) {

                ul.innerHTML = `
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>   
                `;
                el.append(ul);
                el.append(div);

            }

        });

        div.addEventListener('click', () => {
            ul.remove();
            div.remove();
            el.classList.remove('active');
            document.body.classList.remove('lock');
        });
    });

}

export default readeMoreStore;