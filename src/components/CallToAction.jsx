import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section id="cta" className="relative overflow-hidden py-24 gradient-bg">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-secondary-light/90 mb-8 max-w-3xl mx-auto">
            Join Hundreds of businesses already using CoinByte for fast, secure, and cost-effective global transactions
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-started"
              className="button-primary hover:scale-105"
            >
              Get Started Free
              <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
            
            <a
              href="/demo"
              className="button-secondary hover:scale-105"
            >
              Request Demo
            </a>
          </div>

          <p className="mt-8 text-sm text-secondary-light/80">
            No credit card required • Start in minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
