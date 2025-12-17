import { motion } from 'framer-motion'
import {
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const ComplianceMetrics = () => {
  const metrics = [
    {
      label: 'Development Stage',
      value: 'Testnet',
      metric: 'Private Beta',
      Icon: ChartBarIcon
    },
    {
      label: 'Early Testers',
      value: '10+',
      metric: 'Developers',
      Icon: GlobeAltIcon
    },
    {
      label: 'Target Markets',
      value: '20+',
      metric: 'Countries (Roadmap)',
      Icon: CurrencyDollarIcon
    },
    {
      label: 'Compliance Ready',
      value: 'Design Phase',
      metric: 'MiCA • SOC 2 • GDPR',
      Icon: ShieldCheckIcon
    }
  ]

  return (
    <section id="compliance" className="py-24 bg-gradient-to-b from-[#0F0B07] to-primary-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Compliance & Roadmap
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto">
            Enterprise-grade compliance framework with regulatory readiness across key markets
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 relative w-full max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/10 to-primary-gold/5 blur-3xl" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card group"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {metrics.map(({ Icon, ...stat }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 md:p-6 text-center hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="h-8 w-8 text-primary-orange p-1.5 bg-orange-500/10 rounded-lg" />
                  </div>
                  <div className="text-2xl font-bold text-primary-orange mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-secondary-light mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    {stat.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance Frameworks Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'MiCA',
                description: 'Markets in Crypto-Assets regulation - Essential for EU market access',
                icon: '🇪🇺'
              },
              {
                title: 'SOC 2',
                description: 'Industry-standard security & operational controls for enterprises',
                icon: '🔒'
              },
              {
                title: 'GDPR',
                description: 'EU data protection - Critical for handling customer data globally',
                icon: '🛡️'
              }
            ].map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6 card group"
              >
                <div className="text-4xl mb-3">{framework.icon}</div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {framework.title}
                </h3>
                <p className="text-sm text-secondary-light/80">
                  {framework.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComplianceMetrics
