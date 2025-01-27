import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section id="cta" className="relative overflow-hidden py-24 bg-gradient-to-r from-primary-orange to-primary-gold">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover" />
      
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using CoinByte for fast, secure, and cost-effective global transactions
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-started"
              className="button-primary-lg bg-white text-primary-black hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              Get Started Free
              <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
            
            <a
              href="/demo"
              className="button-secondary-lg border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-transform"
            >
              Request Demo
            </a>
          </div>

          <p className="mt-8 text-sm text-white/80">
            No credit card required • Start in minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
