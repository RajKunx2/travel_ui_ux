'use client'
import { PRICING } from '@/constants'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <section className="padding-container py-16 lg:py-20">
      <div className="max-container">
        <motion.div 
          className="flex flex-col justify-start gap-5 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="bold-40 lg:bold-64">Transparent Pricing</h2>
          <p className="regular-16 text-gray-30 max-w-[520px]">
            No hidden charges, no surprises. Pay only for what you get.
          </p>
        </motion.div>

        <div className="mt-10">
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-8">
              <h3 className="bold-32 text-gray-90 mb-4">Service Fee</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="bold-48 text-green-50">
                  {PRICING.serviceFee.currency}{PRICING.serviceFee.min}
                </span>
                <span className="regular-24 text-gray-30">-</span>
                <span className="bold-48 text-green-50">
                  {PRICING.serviceFee.currency}{PRICING.serviceFee.max}
                </span>
              </div>
              <p className="regular-16 text-gray-30 mt-2">
                Based on booking complexity and urgency
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="bold-20 text-gray-90 mb-4">What&apos;s Included:</h4>
              {PRICING.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-50 rounded-full"></div>
                  <span className="regular-16 text-gray-30">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-10 rounded-lg">
              <p className="regular-14 text-gray-30 text-center">
                <strong>Note:</strong> Service fee is separate from IRCTC ticket fare. 
                You pay only after successful booking confirmation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
