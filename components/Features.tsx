'use client'
import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <motion.div 
          className="z-20 flex w-full flex-col lg:w-[60%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              />
            </motion.div>
            <motion.h2 
              className="bold-40 lg:bold-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Why Choose TatkalGo
            </motion.h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
                index={index}
              />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  index: number;
}

const FeatureItem = ({ title, icon, description, index }: FeatureItem) => {
  return (
    <motion.li 
      className="flex w-full flex-1 flex-col items-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ x: 10, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="rounded-full p-4 lg:p-7 bg-green-50"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={icon} alt="feature icon" width={28} height={28} />
      </motion.div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </motion.li>
  )
}

export default Features