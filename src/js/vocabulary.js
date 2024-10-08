const exploreButton = document.querySelector('button.explore');
const explorePanel = document.querySelector('.explore-panel');

// explorePanel.classList.add('hide');

exploreButton.addEventListener('click', (event) => {
    explorePanel.classList.toggle('expand');
    // explorePanel.classList.toggle('hide');
});


const menuButton = document.querySelector('button.expand-menu');
const menuPanel = document.querySelector('.primary-menu');

menuButton.addEventListener('click', (event) => {
    menuPanel.classList.toggle('expand');
    // explorePanel.classList.toggle('hide');
});


const attributionButton = document.querySelector('button.expand-attribution');
const attributionPanel = document.querySelector('.attribution-panel');

if (attributionButton !== null && attributionPanel !== null ) {

    attributionButton.addEventListener('click', (event) => {
        attributionButton.classList.toggle('selected');
        attributionPanel.classList.toggle('expand');
        // explorePanel.classList.toggle('hide');
    });

}

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('mce-EMAIL');
    const feedbackElement = document.getElementById('emailFeedback');
    emailInput.addEventListener('input', validateEmailInput);
    function validateEmailInput() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (emailRegex.test(emailInput.value)) {
            feedbackElement.textContent = ""; // 
            emailInput.classList.remove('invalid'); // Removes invalid class
            emailInput.classList.add('valid'); // Adds valid class
        } else {
            feedbackElement.textContent = "Please provide a valid email"; // Show error message
            emailInput.classList.remove('valid'); // Removes valid class
            emailInput.classList.add('invalid'); // Adds invalid class
        }
    }
});

