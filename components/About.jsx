import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const About = ({ isDarkMode }) => {
  // State to manage active modal content
  const [modalData, setModalData] = useState(null);

  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.About_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 w-full'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am a Computer Science student and an aspiring frontend web developer skilled in web development and data structures. I focus on writing clean, efficient code to turn complex logic into user-friendly digital experiences. I am eager to bring my technical skills and collaborative mindset to deliver immediate impact for your team
          </p>
          
          {/* Changed grid layout to a flexible auto-grid that puts everything on one line dynamically */}
          
          {/* -- ----- Certifications & education ------  -- */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-flow-row sm:grid-flow-col auto-cols-fr gap-4 max-w-2xl w-full'
          >
            {infoList.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='flex flex-col justify-between border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}
                onClick={() => setModalData(item)}
              >
                <div>
                  <Image src={isDarkMode ? item.iconDark : item.icon} alt={item.title} className='w-7 mt-1' />
                  <h3 className='my-3 font-semibold text-gray-700 dark:text-white text-base leading-tight'>{item.title}</h3>
                  <p className='text-gray-600 dark:text-white/80 text-xs sm:text-sm leading-tight mb-4'>{item.description}</p>
                </div>
                
                <button 
                  className='text-xs font-medium text-left text-indigo-600 dark:text-indigo-400 mt-auto transition-colors duration-200 hover:text-indigo-800 dark:hover:text-indigo-300'
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalData(item);
                  }}
                >
                  More details →
                </button>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Dynamic Pop-up Modal Container */}
      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg p-6 rounded-2xl shadow-xl transition-colors duration-300 border bg-white border-gray-200 text-gray-800 dark:bg-[#11071F] dark:border-white/10 dark:text-white"
            >
              <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-100 dark:border-white/10">
                <h3 className="text-xl font-bold font-Ovo tracking-wide">
                  {modalData.popupTitle}
                </h3>
                <button 
                  onClick={() => setModalData(null)}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <Image 
                    src={isDarkMode ? assets.close_white : assets.close_black} 
                    alt="Close" 
                    className="w-5 h-5"
                  />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto pr-1 text-sm sm:text-base leading-relaxed font-Ovo text-gray-600 dark:text-white/90">
                {modalData.popupContent}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setModalData(null)}
                  className="px-5 py-2 text-sm font-medium rounded-xl border transition-all duration-300 border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default About