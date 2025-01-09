function Footer() {
  const [email, setEmail] = React.useState('');
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubscribe = async (e) => {
    try {
      e.preventDefault();
      setIsSubscribing(true);
      setError('');

      const success = await handleNewsletterSubscribe(email);
      if (success) {
        setEmail('');
      } else {
        setError('Subscription failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer data-name="footer" className="bg-black/50 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4" data-name="footer-brand">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#FF6A00] mb-4">CoinByte</h3>
              <p className="text-gray-400 mb-4 max-w-sm">
                Revolutionizing stablecoin payments with secure, fast, and low-cost global transactions.
              </p>
              <div className="flex space-x-4 flex-wrap">
                <a href="#" aria-label="Follow us on Twitter" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="...Twitter Path..." />
                  </svg>
                </a>
                <a href="#" aria-label="Visit our GitHub" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="...GitHub Path..." />
                  </svg>
                </a>
                <a href="#" aria-label="Connect on LinkedIn" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="...LinkedIn Path..." />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2" data-name="footer-links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-[#FF6A00] transition-colors">How It Works</a></li>
              <li><a href="#prices" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Prices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="md:col-span-2" data-name="footer-support">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4" data-name="footer-newsletter">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-gray-800 text-gray-300 placeholder-gray-500 rounded-lg px-4 py-2 border border-gray-700 focus:border-[#FF6A00] focus:outline-none focus:ring focus:ring-[#FF6A00]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-[#FF6A00] text-white font-semibold rounded-lg hover:bg-[#FF8C33] transition-colors disabled:opacity-50"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CoinByte. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FF6A00] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#FF6A00] transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-[#FF6A00] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
