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

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Show the button when the user scrolls down 20px from the top of the document
const myBtn = document.getElementById("myBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block"; // Show the button
    } else {
        myBtn.style.display = "none"; // Hide the button
    }
};

// Adding click event for the button
myBtn.addEventListener('click', topFunction);
