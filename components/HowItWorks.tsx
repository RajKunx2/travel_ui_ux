'use client'
import Image from 'next/image'
import { HOW_IT_WORKS } from '@/constants'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  return (
    <section className="padding-container bg-green-90 py-16 lg:py-20">
      <div className="max-container">
        <motion.div 
          className="flex flex-col justify-start gap-5 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="bold-40 lg:bold-64 text-white">How It Works</h2>
          <p className="regular-16 text-white/80 max-w-[520px]">
            Get your train tickets in 3 simple steps with our verified IRCTC agents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div 
              key={step.step} 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                />
              </motion.div>
              <div className="bg-white rounded-2xl p-6 w-full">
                <div className="text-green-50 font-bold text-lg mb-2">
                  {step.step}
                </div>
                <h3 className="bold-20 text-gray-90 mb-3">
                  {step.title}
                </h3>
                <p className="regular-16 text-gray-30">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
