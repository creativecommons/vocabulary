// Utility function to toggle panel and button state
const toggleButtonState = (button, panel, expandedClass, activeText, inactiveText) => {
    button.addEventListener('click', () => {
      const isActive = button.classList.toggle('active'); // Toggle 'active' class on button
      panel.classList.toggle(expandedClass); // Toggle the 'expanded' class on panel
  
      // Update button text based on the state
      button.textContent = isActive ? activeText : inactiveText;
    });
  };
  
  // Element selectors
  const selectElement = (selector) => document.querySelector(selector);
  
  // Initialize elements
  const exploreButton = selectElement('button.explore');
  const explorePanel = selectElement('.explore-panel');
  const menuButton = selectElement('button.expand-menu');
  const menuPanel = selectElement('.primary-menu');
  const attributionButton = selectElement('button.expand-attribution');
  const attributionPanel = selectElement('.attribution-panel');
  
  // Set up event listeners only if elements exist
  exploreButton && exploreButton.addEventListener('click', () => {
    explorePanel.classList.toggle('expanded');
  });
  
  menuButton && menuButton.addEventListener('click', () => {
    menuPanel.classList.toggle('expanded');
  });
  
  attributionButton && attributionPanel &&
    toggleButtonState(attributionButton, attributionPanel, 'expanded', 'Close', 'View');
  