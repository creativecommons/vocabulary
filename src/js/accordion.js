// Get all the FAQ head(questions) elements
const faqHeads = document.querySelectorAll(".faq__head");

// Loop through each head(question) and add a click event listener
faqHeads.forEach((question, index) => {
  const bodyId = `faq-body-${index + 1}`;
  const faqBody = document.getElementById(bodyId);
  const iconDown = question.querySelector(".fa-chevron-down");
  const iconUp = question.querySelector(".fa-chevron-up");

  question.addEventListener("click", () => {
    // Toggle the 'hidden' attribute on the corresponding FAQ answers (p tags)
    faqBody.hidden = !faqBody.hidden;

    // Toggle the icons visibility accordingly
    if (faqBody.hidden) {
      iconDown.style.display = "inline"; // Show down icon
      iconUp.style.display = "none"; // Hide up icon
    } else {
      iconDown.style.display = "none"; // Hide down icon
      iconUp.style.display = "inline"; // Show up icon
    }
  });
});
