const exploreButton = document.querySelector('button.explore');
const explorePanel = document.querySelector('.explore-panel');

exploreButton.addEventListener('click', (event) => {
    explorePanel.classList.toggle('expand');

    // Toggle button text between 'View' and 'Close'
    if (explorePanel.classList.contains('expand')) {
        exploreButton.textContent = 'Close';
    } else {
        exploreButton.textContent = 'View';
    }
});

const menuButton = document.querySelector('button.expand-menu');
const menuPanel = document.querySelector('.primary-menu');

menuButton.addEventListener('click', (event) => {
    menuPanel.classList.toggle('expand');

    // Toggle button text between 'View' and 'Close'
    if (menuPanel.classList.contains('expand')) {
        menuButton.textContent = 'Close';
    } else {
        menuButton.textContent = 'View';
    }
});

const attributionButton = document.querySelector('button.expand-attribution');
const attributionPanel = document.querySelector('.attribution-panel');

if (attributionButton !== null && attributionPanel !== null) {
    attributionButton.addEventListener('click', (event) => {
        attributionPanel.classList.toggle('expand');

        // Toggle button text between 'View' and 'Close'
        if (attributionPanel.classList.contains('expand')) {
            attributionButton.textContent = 'Close';
        } else {
            attributionButton.textContent = 'View';
        }
    });
}
