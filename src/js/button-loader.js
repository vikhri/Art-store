const selectors = {
    button: '.card__button'
}

const states = {
    loader: 'card__button--loader',
    incart: 'card__button--incart'
}

const loader = ({currentTarget}) => {

    currentTarget.classList.add(states.loader);
    currentTarget.disabled = true;

    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(() => {

            currentTarget.classList.remove(states.loader);
            currentTarget.disabled = false;
            currentTarget.classList.add(states.incart);
            currentTarget.textContent = "В корзине";

        });
};

const initLoader = () => {

    const buttons = document.querySelectorAll(selectors.button);

    buttons.forEach((button) => {
        button.addEventListener("click", loader)
    })

};

window.addEventListener('DOMContentLoaded', initLoader);