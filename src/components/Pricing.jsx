import { motion } from 'framer-motion'
import { CurrencyDollarIcon, BuildingLibraryIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const pricingTiers = [
  {
    title: "Developer (Free)",
    price: "$0",
    period: "forever",
    description: "Start building on testnet with our CLI. Perfect for prototyping global stablecoin payment flows before going live.",
    features: [
      "Access to CLI testnet",
      "1,000 API calls/month",
      "Community support",
      "Basic documentation"
    ],
    icon: CurrencyDollarIcon,
    cta: "Get Started",
    url: "https://coinbyte-cli.vercel.app/",
    popular: false
  },
  {
    title: "Pay-as-you-go",
    price: "$0.01",
    period: "per API call",
    description: "Ideal for startups and small businesses – only pay for what you use.",
    features: [
      "Access to core API endpoints",
      "No upfront costs",
      "Scalable and flexible",
      "Standard support"
    ],
    icon: CurrencyDollarIcon,
    cta: "Get Started",
    url: "https://wt.ls/waitlist",
    popular: true
  },
  {
    title: "Enterprise Tier",
    price: "$499",
    period: "per month",
    description: "Priority support, custom integrations, and advanced analytics with AI-powered compliance.",
    features: [
      "Dedicated support",
      "Custom integrations",
      "Priority SLAs",
      "Enhanced security",
      "Priority access to Byte AI analytics",
      "DID Wallet integration for compliance"
    ],
    icon: BuildingLibraryIcon,
    cta: "Contact Sales",
    url: "mailto:coinbyte002@gmail.com",
    popular: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-primary-black to-[#0F0B07]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto mt-4">
            Choose the plan that best suits your business. Whether you’re a startup or an enterprise, CoinByte has the right solution for your payment infrastructure needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card p-8 flex flex-col relative ${
                  tier.popular ? 'border-2 border-primary-orange/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6 flex items-center">
                  <div className="p-3 bg-primary-orange/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary-orange" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100 ml-4">
                    {tier.title}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-orange">
                    {tier.price}
                  </span>
                  <span className="text-secondary-light/70 ml-1">
                    {tier.period}
                  </span>
                </div>
                
                <p className="text-secondary-light/90 mb-6">{tier.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-primary-orange mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-secondary-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={`mt-auto ${
                    tier.popular ? 'button-primary' : 'button-secondary'
                  }`}
                  onClick={() => window.open(tier.url, '_blank')}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
