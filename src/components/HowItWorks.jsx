import { motion } from 'framer-motion'
import { ArrowRightIcon, DevicePhoneMobileIcon, WalletIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    title: "Create Account",
    description: "Sign up in 30 seconds with email or social auth",
    icon: <DevicePhoneMobileIcon className="w-8 h-8" />
  },
  {
    title: "Fund Wallet",
    description: "Add funds via bank transfer or credit card",
    icon: <WalletIcon className="w-8 h-8" />
  },
  {
    title: "Start Transacting",
    description: "Send, receive, and convert assets instantly",
    icon: <ArrowsRightLeftIcon className="w-8 h-8" />
  }
]

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-black to-primary-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto">
            Get started with CoinByte in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl backdrop-blur-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 bg-black/30"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary-orange to-primary-gold flex items-center justify-center font-bold text-primary-black">
                {index + 1}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-primary-orange">
                  <ArrowRightIcon className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
