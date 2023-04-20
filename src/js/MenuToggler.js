import BuyButtons from "./BuyButtons";

const selectors = {
    menu: '.menu',
    toggleButton: '.navigation__toggle-button',
    toggle: '.navigation__toggle'
}

const states = {
    toggle: {
        closed: 'navigation__toggle--closed',
        open: 'navigation__toggle--open'
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

        const isClosed = toggle.classList.contains(states.toggle.closed);

        toggle.classList.toggle(states.toggle.open, isClosed);
        toggle.classList.toggle(states.toggle.closed, !isClosed);
        menu.classList.toggle(states.menu.open, isClosed);

    })
};

export default HeaderToggler