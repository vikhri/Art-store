import BuyButtons from "./BuyButtons";

const selectors = {
    menu: '.menu',
    toggleButton: '.navigation__toggle-button',
    toggle: '.navigation__toggle'
}

const states = {
    toggle: {
        open: 'is-open'
    },
    menu: {
        open: 'menu--open'
    }
}

const menu = document.querySelector(selectors.menu);
const button = document.querySelector(selectors.toggleButton);
const toggle = document.querySelector(selectors.toggle);


const HeaderToggler = () => {

    button.addEventListener('click', () => {

        const isOpen = toggle.classList.contains(states.toggle.open);

        toggle.classList.toggle(states.toggle.open, !isOpen);
        menu.classList.toggle(states.menu.open, !isOpen);

    })
};

export default HeaderToggler