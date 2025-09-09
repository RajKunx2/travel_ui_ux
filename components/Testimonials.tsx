'use client'
import Image from 'next/image'
import { TESTIMONIALS } from '@/constants'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className="padding-container bg-white py-16 lg:py-20">
      <div className="max-container">
        <motion.div 
          className="flex flex-col justify-start gap-5 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="bold-40 lg:bold-64">What Our Customers Say</h2>
          <p className="regular-16 text-gray-30 max-w-[520px]">
            Real stories from satisfied customers who got their train tickets through TatkalGo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name} 
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array(5).fill(1).map((_, i) => (
                  <Image 
                    key={i}
                    src="/star.svg"
                    alt="star"
                    width={20}
                    height={20}
                    className={i < testimonial.rating ? 'opacity-100' : 'opacity-30'}
                  />
                ))}
              </div>
              
              <p className="regular-16 text-gray-30 mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-3">
                <Image 
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="bold-16 text-gray-90">
                    {testimonial.name}
                  </h4>
                  <p className="regular-14 text-gray-30">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
