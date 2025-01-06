// Make functions globally available
window.handleGetStarted = function() {
  try {
    // Track analytics
    trackEvent('get_started_clicked');
    // Open registration modal
    openModal('registration');
  } catch (error) {
    reportError(error);
    showNotification('error', 'Failed to process request. Please try again.');
  }
};

window.handleDownloadWallet = function() {
  try {
    // Track analytics
    trackEvent('download_wallet_clicked');
    
    // Check platform and redirect to appropriate store
    const platform = detectPlatform();
    const storeUrls = {
      ios: 'https://apps.apple.com/coinbyte',
      android: 'https://play.google.com/store/coinbyte',
      desktop: 'https://coinbyte.com/downloads'
    };
    
    window.open(storeUrls[platform] || storeUrls.desktop, '_blank');
  } catch (error) {
    reportError(error);
    showNotification('error', 'Failed to initiate download. Please try again.');
  }
};

window.handleJoinWaitlist = function() {
  try {
    // Track analytics
    trackEvent('join_waitlist_clicked');
    window.open('https://wt.ls/waitlist', '_blank');
  } catch (error) {
    reportError(error);
    showNotification('error', 'Failed to join waitlist. Please try again.');
  }
};

window.handleNewsletterSubscribe = async function(email) {
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    if (!isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    // Track analytics
    trackEvent('newsletter_subscribe', { email });

    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    showNotification('success', 'Thank you for subscribing to our newsletter!');
    return true;
  } catch (error) {
    reportError(error);
    showNotification('error', error.message || 'Failed to subscribe. Please try again.');
    return false;
  }
};

function detectPlatform() {
  try {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'ios';
    } else if (/android/.test(userAgent)) {
      return 'android';
    }
    return 'desktop';
  } catch (error) {
    reportError(error);
    return 'desktop';
  }
}

function isValidEmail(email) {
  try {
    return /^[^\s@]+@[^\s@]+$/.test(email);
  } catch (error) {
    reportError(error);
    return false;
  }
}

window.trackEvent = function(eventName, data = {}) {
  try {
    console.log('Track event:', eventName, data);
  } catch (error) {
    reportError(error);
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

    setTimeout(() => {
      notification.remove();
    }, 3000);
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
        <button class="absolute top-4 right-4 text-gray-400 hover:text-white" onclick="this.closest('.fixed').remove()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  } catch (error) {
    reportError(error);
  }
};

// Initialize error reporting
window.reportError = function(error) {
  console.error('Error:', error);
};
