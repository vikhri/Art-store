const selectors = {
    button: '.product-card__buy-button',
    text: '.button-text'
}

const states = {
    loader: 'is-loading',
    inCart: 'in-cart',
    hasIcon: 'has-icon'
}

const messages = {
    inCart: 'В корзине'
}

const ButtonLoader = ({currentTarget}) => {

    currentTarget.classList.add(states.loader);
    currentTarget.disabled = true;



    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(() => {

            currentTarget.classList.remove(states.loader);
            currentTarget.disabled = false;
            currentTarget.classList.add(states.inCart);
            currentTarget.classList.add(states.hasIcon);
            console.log(currentTarget.querySelector(selectors.text));
            currentTarget.querySelector(selectors.text).textContent = messages.inCart;


        });
};

const ManageButtons = () => {

    const buttons = document.querySelectorAll(selectors.button);

    buttons.forEach((button) => {
        button.addEventListener("click", ButtonLoader)
    })

};

export default ManageButtons