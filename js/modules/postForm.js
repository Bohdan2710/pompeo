import { handlingPostPomp } from "../services/services";
function postForm() {
    const form = document.querySelector('form'),
        btn = document.querySelector('.wrap-inp-btn__btn');


    const message = {
        loading: "img/tail-spin.svg",
        fail: "try again",
        complete: "done"
    };


    function postPomp(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();


            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            loadingBtn(message.loading);

            handlingPostPomp('http://localhost:3000/req', "POST", json)
                .then(() => messageBtn(message.complete))
                .catch(() => messageBtn(message.fail))
                .finally(form.reset());
        });
    }
    postPomp(form);


    function loadingBtn(message) {
        btn.innerText = '';
        btn.setAttribute("disable", "disable");

        const img = document.createElement('img');
        img.style.width = "30px";
        img.src = message;
        btn.append(img);

    }

    function messageBtn(message) {
        btn.innerText = `${message}`;
        btn.setAttribute("disable", "disable");
        setTimeout(() => {
            btn.innerText = 'SUBSCRIBE';
        }, 3000);

    }
}

export default postForm;

