
const collapsedButtons = document.querySelectorAll('button.expand');

collapsedButtons.forEach((expander) => {

    expander.parentElement.querySelector('ul').classList.toggle('hide');
    
    expander.addEventListener('click', (event) => {
        event.target.parentElement.querySelector('ul').classList.toggle('hide');
    });

});
