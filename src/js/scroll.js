document.addEventListener('DOMContentLoaded', function () {
  const scrollThreshold = 1000;
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  const scrollToTop = () => {
    if (window.scrollY > scrollThreshold) {
      scrollToTopButton.classList.add('show');
      scrollToTopButton.classList.remove('hide');
    } else {
      scrollToTopButton.classList.remove('show');
      scrollToTopButton.classList.add('hide');
    }
  };

  window.addEventListener('scroll', scrollToTop);
});
