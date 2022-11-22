function hamburger() {

    const menuHamb = document.querySelector('.wrap-menu__nav'),
        NavBackground = document.querySelector('.wrap-menu__background');



    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.wrap-menu__hamburger')) {

            menuHamb.classList.add('active');
            document.body.classList.add('lock');
            NavBackground.classList.add('active');

        } else if (target.closest('.nav__hamburger') || target.closest('.wrap-menu__background') || target.closest('.wrap-menu__nav ul li a')) {

            menuHamb.classList.remove('active');
            document.body.classList.remove('lock');
            NavBackground.classList.remove('active');

        }

    });

}

export default hamburger;
