const exploreButton = document.querySelector("button.explore");
const explorePanel = document.querySelector(".explore-panel");

// explorePanel.classList.add('hide');

exploreButton.addEventListener("click", (event) => {
  explorePanel.classList.toggle("expand");
  // explorePanel.classList.toggle('hide');
});

const menuButton = document.querySelector("button.expand-menu");
const menuPanel = document.querySelector(".primary-menu");

menuButton.addEventListener("click", (event) => {
  menuPanel.classList.toggle("expand");
  // explorePanel.classList.toggle('hide');
});

const attributionButton = document.querySelector("button.expand-attribution");
const attributionPanel = document.querySelector(".attribution-panel");

if (attributionButton !== null && attributionPanel !== null) {
  attributionButton.addEventListener("click", () => {
    // Toggle the class to change the active state
    attributionButton.classList.toggle("selected");
    attributionPanel.classList.toggle("expand");

    // Check if the button is in the active state and change the text accordingly
    if (attributionButton.classList.contains("selected")) {
      attributionButton.textContent = "Close"; // When it is opend or active, the btn text changes to Close
    } else {
      attributionButton.textContent = "View"; // When it is closed it changes to View
    }
  });
}
