function localCheckbox() {

    const checkbox = document.querySelector('.wrap-check__checkbox'),
        button = document.querySelector('.wrap-inp-btn__btn'),
        checkboxPolicy = document.querySelector('.wrap-check-policy__check-policy');


    if (localStorage.getItem('checked')) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    checkbox.addEventListener('change', () => {

        if (checkbox.checked) {
            localStorage.setItem('checked', true);
        } else {
            localStorage.removeItem('checked');
        }
    });

    if (localStorage.getItem('checked-policy')) {
        checkboxPolicy.checked = true;
        button.removeAttribute('disabled');
    } else {
        checkboxPolicy.checked = false;
        button.setAttribute('disabled', 'disabled');
    }

    checkboxPolicy.addEventListener('change', () => {

        if (checkboxPolicy.checked) {
            localStorage.setItem('checked-policy', true);
            button.removeAttribute('disabled');
        } else {
            localStorage.removeItem('checked-policy');
            button.setAttribute('disabled', 'disabled');
        }
    });

}
export default localCheckbox;