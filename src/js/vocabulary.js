const exploreButton = document.querySelector('button.explore');
const explorePanel = document.querySelector('.explore-panel');

explorePanel.classList.add('hide');

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

const accordionHeader = document.querySelectorAll(".accordion-header")

    if(typeof accordionHeader !== null){

        accordionHeader.forEach(header=>{
          header.addEventListener("click",(event)=>{

             const content = header.nextElementSibling
             const chevron = header.querySelector(".accordion-chevron")

             if(content.classList.contains("hidden")){
                 // removing hidden class from accordion-content
                content.classList.toggle("hidden")
                      // adding accordion-content class in accordion-content
                 content.classList.toggle("accordion-content")
                    // adding accordion-chevron-active class in accordion chevron
                 chevron.classList.toggle("accordion-chevron-active")

            }else{
                    // removing hidden class from accordion-content
                    chevron.classList.toggle("accordion-chevron-active") 
                    // adding hidden class in accordion-content is it is active
                    content.classList.toggle("hidden")
                    // removing accordion-content class from accordion-content
                    content.classList.toggle("accordion-content")
             }
        })
    })
}