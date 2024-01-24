function isElementAtBottom(element) {
    var elementRect = element.getBoundingClientRect();
    return elementRect.bottom - elementRect.height /2 <= window.innerHeight;
  }

  function handleScroll() {
    var animatedElements = document.querySelectorAll('.to-load');

    animatedElements.forEach(function(element) {
      if (isElementAtBottom(element)) {
        element.classList.add('loaded');
        element.classList.remove("to-load")
      }
    });
  }

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
