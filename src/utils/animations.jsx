/**
 * Animation utilities with enhanced configurability and safety checks
 */

// Configure default animation parameters
const animationDefaults = {
  fadeInDuration: '0.5s',
  slideUpDuration: '0.4s',
  hoverScaleAmount: '1.05',
  glowIntensity: '2px'
};

// Core animation functions
function fadeInElement(element, options = {}) {
  try {
    if (!element) throw new Error('Invalid element provided for fadeIn');
    
    Object.assign(element.style, {
      animation: `fade-in ${options.duration || animationDefaults.fadeInDuration} ease-out`,
      opacity: 0
    });
    
    // Trigger reflow to restart animation
    void element.offsetWidth;
    element.style.opacity = '1';
  } catch (error) {
    reportError(error, 'fadeInElement');
  }
}

function slideUpElement(element, options = {}) {
  try {
    if (!element) throw new Error('Invalid element provided for slideUp');
    
    element.style.animation = `slide-up ${
      options.duration || animationDefaults.slideUpDuration
    } cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    
    // Force layout update
    void element.offsetHeight;
  } catch (error) {
    reportError(error, 'slideUpElement');
  }
}

function addHoverEffect(element, options = {}) {
  try {
    if (!element) throw new Error('Invalid element for hover effect');
    
    element.style.transition = `transform ${options.duration || '0.2s'} ease-in-out`;
    element.addEventListener('mouseenter', () => {
      element.style.transform = `scale(${options.scale || animationDefaults.hoverScaleAmount})`;
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  } catch (error) {
    reportError(error, 'addHoverEffect');
  }
}

function addGlowEffect(element, options = {}) {
  try {
    if (!element) throw new Error('Invalid element for glow effect');
    
    element.style.boxShadow = `0 0 ${options.intensity || animationDefaults.glowIntensity} ${
      options.color || '#FF6A00'
    }`;
    element.style.transition = 'box-shadow 0.3s ease-in-out';
  } catch (error) {
    reportError(error, 'addGlowEffect');
  }
}

// Animation removal functions
function removeFadeIn(element) {
  try {
    if (element) element.style.animation = '';
  } catch (error) {
    reportError(error, 'removeFadeIn');
  }
}

function removeHoverEffect(element) {
  try {
    if (element) {
      element.style.transform = '';
      element.style.transition = '';
    }
  } catch (error) {
    reportError(error, 'removeHoverEffect');
  }
}

// Utility for error reporting
function reportError(error, context = 'animations') {
  console.error(`[Animation Error] ${context}:`, error);
  // Consider adding error tracking service integration here
}
