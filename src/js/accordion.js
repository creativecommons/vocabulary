const accordion = (accordionHeader) => {
  const button = accordionHeader.querySelector('button[aria-expanded]');
  const contentId = button.getAttribute('aria-controls');
  const contentPanel = document.getElementById(contentId);

  let isOpen = button.getAttribute('aria-expanded') === 'true';

  // Show the content if the accordion is open by default
  if (isOpen) {
    contentPanel.removeAttribute('hidden');
    contentPanel.classList.add('accordion-open');
  }

  const handleButtonClick = () => toggleAccordion(!isOpen);

  const toggleAccordion = (newState) => {
    if (newState === isOpen) return;

    isOpen = newState;
    button.setAttribute('aria-expanded', `${isOpen}`);

    // Toggle hidden attribute based on new state
    if (isOpen) {
      contentPanel.removeAttribute('hidden');
      contentPanel.classList.add('accordion-open');
    } else {
      contentPanel.setAttribute('hidden', '');
      contentPanel.classList.remove('accordion-open');
    }
  };

  button.addEventListener('click', handleButtonClick);

  return {
    open: () => toggleAccordion(true),
    close: () => toggleAccordion(false),
  };
};

// Initialize accordions
document.querySelectorAll('.accordion-header').forEach((header) => {
  accordion(header);
});
