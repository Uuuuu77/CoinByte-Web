// Utility functions
function reportError(error) {
  console.error('Error:', error);
}

// Track event function (now properly exported)
export function trackEvent(eventName, data = {}) {
  try {
    console.log('Track event:', eventName, data);
    // Add your actual analytics tracking implementation here
  } catch (error) {
    reportError(error);
  }
}

// Platform detection
function detectPlatform() {
  try {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipod|ipad/.test(userAgent)) return 'ios';
    if (/android/.test(userAgent)) return 'android';
    return 'desktop';
  } catch (error) {
    reportError(error);
    return 'desktop';
  }
}

// Email validation
function isValidEmail(email) {
  try {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  } catch (error) {
    reportError(error);
    return false;
  }
}

// Global functions
window.handleGetStarted = function() {
  try {
    trackEvent('get_started_clicked');
    window.open('https://wt.ls/waitlist', '_blank');
  } catch (error) {
    reportError(error);
    window.showNotification('error', 'Failed to process request. Please try again.');
  }
};

window.handleDownloadWallet = function() {
  try {
    trackEvent('download_wallet_clicked');
    const platform = detectPlatform();
    const storeUrls = {
      ios: 'https://wt.ls/waitlist',
      android: 'https://wt.ls/waitlist',
      desktop: 'https://wt.ls/waitlist'
    };
    window.open(storeUrls[platform] || storeUrls.desktop, '_blank');
  } catch (error) {
    reportError(error);
    window.showNotification('error', 'Failed to initiate download. Please try again.');
  }
};

window.handleNewsletterSubscribe = async function(email) {
  try {
    if (!email) throw new Error('Email is required');
    if (!isValidEmail(email)) throw new Error('Invalid email format');

    trackEvent('newsletter_subscribe', { email });
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.showNotification('success', 'Thank you for subscribing!');
    return true;
  } catch (error) {
    reportError(error);
    window.showNotification('error', error.message || 'Subscription failed.');
    return false;
  }
};

window.showNotification = function(type, message) {
  try {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 p-4 rounded-lg text-white ${
      type === 'error' ? 'bg-red-500' : 'bg-green-500'
    } shadow-lg z-50 fade-in`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  } catch (error) {
    reportError(error);
  }
};

window.openModal = function(type) {
  try {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm fade-in';
    modal.innerHTML = `
      <div class="bg-[#1A1A1A] p-8 rounded-xl max-w-md w-full mx-4 slide-up">
        <h2 class="text-2xl font-bold mb-4">Get Started with CoinByte</h2>
        <p class="text-gray-400 mb-6">Create your account to start your crypto journey</p>
        <form class="space-y-4">
          <input type="text" placeholder="Full Name" class="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-[#FF6A00] outline-none">
          <input type="email" placeholder="Email Address" class="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-[#FF6A00] outline-none">
          <input type="password" placeholder="Password" class="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-[#FF6A00] outline-none">
          <button type="submit" class="button-primary w-full">Create Account</button>
        </form>
        <button class="absolute top-4 right-4 text-gray-400 hover:text-white" onclick="this.closest('div').remove()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => e.target === modal && modal.remove());
  } catch (error) {
    reportError(error);
  }
};

// Initialize error reporting
window.reportError = reportError;
