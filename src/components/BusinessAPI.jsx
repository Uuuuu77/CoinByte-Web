import { FaPlug, FaChartLine, FaExchangeAlt, FaCogs } from 'react-icons/fa6'

const BusinessAPI = () => {
  const apiBenefits = [
    {
      title: "Enterprise Integration",
      description: "Seamless API integration with 99.9% uptime SLA and enterprise-grade security",
      icon: <FaPlug className="w-8 h-8" />,
      gradient: "from-[#FF6A00] to-[#FFB400]"
    },
    {
      title: "Smart Analytics",
      description: "Real-time transaction insights with customizable dashboards and webhooks",
      icon: <FaChartLine className="w-8 h-8" />,
      gradient: "from-[#FFB400] to-[#FF6A00]"
    },
    {
      title: "Global Payments",
      description: "Process cross-border payments in 150+ currencies with instant settlement",
      icon: <FaExchangeAlt className="w-8 h-8" />,
      gradient: "from-[#FF6A00] to-[#FFB400]"
    },
    {
      title: "Custom Workflows",
      description: "White-label solutions with customizable payment flows and risk controls",
      icon: <FaCogs className="w-8 h-8" />,
      gradient: "from-[#FFB400] to-[#FF6A00]"
    }
  ]

  return (
    <section id="business-api" className="py-24 bg-gradient-to-br from-primary-black to-[#2A2A2A]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Enterprise-Grade Payment Infrastructure
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Power your business with bank-grade financial infrastructure and global payment capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apiBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl backdrop-blur-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 bg-black/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://business.coinbyte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary-lg hover:scale-105 transition-transform"
          >
            Contact Sales
            <FaArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BusinessAPI
