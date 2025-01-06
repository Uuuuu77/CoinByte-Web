function Footer() {
  const [email, setEmail] = React.useState('');
  const [isSubscribing, setIsSubscribing] = React.useState(false);

  const handleSubscribe = async (e) => {
    try {
      e.preventDefault();
      setIsSubscribing(true);
      
      window.open('https://wt.ls/waitlist', '_blank');
    } catch (error) {
      reportError(error);
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
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045[...]
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755[...]
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 [...]
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
                className="flex-grow bg-white/10 rounded-lg px-4 py-2 border border-gray-700 focus:border-[#FF6A00] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="button-primary whitespace-nowrap"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
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
