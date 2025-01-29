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
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-secondary-light/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using CoinByte for fast, secure, and cost-effective global transactions
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wt.ls/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary hover:scale-105 group"
            >
              Join Waitlist Now
              <FaArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="https://wt.ls/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary hover:scale-105"
            >
              Request Early Access
            </a>
          </div>

          <p className="mt-8 text-sm text-secondary-light/80">
            No credit card required • Priority access for early signups
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
