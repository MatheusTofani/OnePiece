document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            hideAbas();
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            aba.classList.add('shows__list--is-active');
            removeActive();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrExit)
    }
});


function openOrExit(elemento){
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
