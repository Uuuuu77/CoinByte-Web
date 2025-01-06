function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    try {
      setIsMenuOpen(!isMenuOpen);
    } catch (error) {
      reportError(error);
    }
  };

  return (
    <header data-name="header" className="fixed w-full top-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div data-name="logo" className="flex items-center">
            <h1 className="text-2xl font-bold text-[#FF6A00]">CoinByte</h1>
          </div>

          <div data-name="desktop-menu" className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-[#FF6A00] transition-colors">Features</a>
            <a href="#how-it-works" className="text-white hover:text-[#FF6A00] transition-colors">How It Works</a>
            <a href="#prices" className="text-white hover:text-[#FF6A00] transition-colors">Prices</a>
            <button className="button-primary">Get Started</button>
          </div>

          <button 
            data-name="mobile-menu-button"
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div data-name="mobile-menu" className="md:hidden pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white hover:text-[#FF6A00] transition-colors">Features</a>
              <a href="#how-it-works" className="text-white hover:text-[#FF6A00] transition-colors">How It Works</a>
              <a href="#prices" className="text-white hover:text-[#FF6A00] transition-colors">Prices</a>
              <button className="button-primary w-full">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
