function fadeInElement(element) {
  try {
    element.classList.add('fade-in');
  } catch (error) {
    reportError(error);
  }
}

function slideUpElement(element) {
  try {
    element.classList.add('slide-up');
  } catch (error) {
    reportError(error);
  }
}

function addHoverEffect(element) {
  try {
    element.classList.add('hover-scale');
  } catch (error) {
    reportError(error);
  }
}

function addGlowEffect(element) {
  try {
    element.classList.add('glow');
  } catch (error) {
    reportError(error);
  }
}
