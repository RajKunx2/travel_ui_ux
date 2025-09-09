'use client'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <motion.div 
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image 
            src="/camp.svg"
            alt="train"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
        </motion.div>
        <motion.h1 
          className="bold-52 lg:bold-88"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Book Train Tickets Instantly with Verified IRCTC Agents
        </motion.h1>
        <motion.p 
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From Emergency Tatkal to Regular Bookings — trusted agents, transparent fees, confirmed tickets. Get your train tickets in minutes, not hours.
        </motion.p>

        <motion.div 
          className="my-11 flex flex-wrap gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <Image 
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              </motion.div>
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            15k+
            <span className="regular-16 lg:regular-20 ml-1">Successful Bookings</span>
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col w-full gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button 
            type="button" 
            title="Find an Agent" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Book Now" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative flex flex-1 items-start"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Route</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Delhi to Mumbai</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Tatkal Success</p>
              <p className="bold-20 text-white">95%</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Service Fee</p>
              <p className="bold-20 text-white">₹150</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero