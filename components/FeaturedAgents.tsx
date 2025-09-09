'use client'
import Image from 'next/image'
import { FEATURED_AGENTS } from '@/constants'
import { motion } from 'framer-motion'

const FeaturedAgents = () => {
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
          <h2 className="bold-40 lg:bold-64">Featured Agents</h2>
          <p className="regular-16 text-gray-30 max-w-[520px]">
            Our top-rated verified IRCTC agents with highest success rates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {FEATURED_AGENTS.map((agent, index) => (
            <motion.div 
              key={agent.name} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <Image 
                  src={agent.image}
                  alt={agent.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <h3 className="bold-20 text-gray-90 mb-2">
                  {agent.name}
                </h3>
                <p className="regular-14 text-gray-30 mb-3">
                  {agent.location}
                </p>
                
                <div className="flex items-center gap-1 mb-2">
                  {Array(5).fill(1).map((_, i) => (
                    <Image 
                      key={i}
                      src="/star.svg"
                      alt="star"
                      width={16}
                      height={16}
                      className={i < Math.floor(agent.rating) ? 'opacity-100' : 'opacity-30'}
                    />
                  ))}
                  <span className="regular-14 text-gray-30 ml-1">
                    {agent.rating}
                  </span>
                </div>

                <div className="w-full space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="regular-14 text-gray-30">Tatkal Success</span>
                    <span className="bold-16 text-green-50">{agent.tatkalSuccess}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="regular-14 text-gray-30">Bookings</span>
                    <span className="bold-16 text-gray-90">{agent.bookings.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-green-50 text-white rounded-lg py-2 px-4 regular-16 hover:bg-green-60 transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedAgents
