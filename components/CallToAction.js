function CallToAction() {
  const handleJoinWaitList = () => {
    try {
      trackEvent('join_waitlist_clicked');
      window.open('https://https://wt.ls/waitlist', '_blank');
    } catch (error) {
      reportError(error);
    }
  };

  return (
    <section data-name="cta" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FFB400] opacity-20 blur-3xl"></div>
          <div className="relative bg-black/50 backdrop-blur-xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Crypto Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users worldwide who trust CoinByte for their digital asset management
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                className="button-primary text-lg"
                onClick={handleDownloadWallet}
              >
                Download Wallet
              </button>
              <button 
                className="button-secondary text-lg"
                onClick={handleJoinWaitList}
              >
                Join WaitList
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
