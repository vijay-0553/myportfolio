import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Projects = ({ isDarkMode }) => {
  const [activeProject, setActiveProject] = useState(null);
  // Track which button index is currently being pressed/touched on mobile screen viewports
  const [touchedIndex, setTouchedIndex] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Prevents background layout scroll while modal overlay is active
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset'; // Restores window viewport interaction properties smoothly
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Showcasing My Engineering Projects
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        My Tech Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-x-5 gap-y-8 dark:text-black'>
        {workData.map((project, index) => (
          <div key={index} className='flex flex-col group'>
            
            {/* Project Image Box Container - Main Click action decoupled from card background context */}
            <div
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative w-full'
              style={{ backgroundImage: `url(${project.bgImage})` }}>
              
              {/* Floating Text Overlay Badge Layer */}
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col justify-center duration-500 group-hover:bottom-6 shadow-md'>
                <h2 className='font-semibold text-base text-gray-900'>{project.title}</h2>
                <p className='text-xs text-gray-600 mt-0.5'>{project.description}</p>
              </div>
            </div>

            {/* View Info Action Target element — Executing standalone modal opening logic strictly from click state */}
            <button 
              onClick={() => openModal(project)}
              onTouchStart={() => setTouchedIndex(index)}
              onTouchEnd={() => setTouchedIndex(null)}
              className={`w-full mt-3 text-center text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-md border outline-none select-none transition-all duration-200
                ${isDarkMode 
                  ? `border-white/40 shadow-[2px_2px_0_rgba(255,255,255,0.2)] hover:bg-white hover:text-black hover:border-white focus:bg-white focus:text-black
                     ${touchedIndex === index ? 'bg-white text-black border-white' : 'bg-transparent text-white'}` 
                  : `border-black shadow-[2px_2px_0_#000] hover:bg-lime-300 hover:text-black focus:bg-lime-300 focus:text-black
                     ${touchedIndex === index ? 'bg-lime-300 text-black' : 'bg-white text-gray-800'}`
                }`}
            >
              View Info
            </button>
            
          </div>
        ))}
      </motion.div>

      <motion.a 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.a>

      {/* Pop Message Modal Dialog System */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-x-hidden overflow-y-auto">
            {/* Ambient Blurred Dark Sheet Mask backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            />

            {/* Content Display Panel Body — Responsive layout structures */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className={`relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl z-10 font-Ovo max-h-[85vh] overflow-y-auto border 
                ${isDarkMode 
                  ? 'bg-[#16121e] text-gray-100 border-purple-950/30 shadow-purple-950/10' 
                  : 'bg-white text-gray-800 border-gray-100 shadow-gray-200'
                }`}
            >
              {/* Modal dismiss button trigger cross */}
              <button 
                onClick={closeModal}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200
                  ${isDarkMode 
                    ? 'hover:bg-white/10 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header Title Metadata Blocks */}
              <div className="mb-6">
                <span className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md
                  ${isDarkMode ? 'bg-purple-950/50 text-purple-300' : 'bg-lime-100 text-lime-800'}`}>
                  {activeProject.description}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2.5">{activeProject.title}</h3>
              </div>

              {/* Dynamic Project Content Grid — Using crisp slate-700 gray variant styles in light view */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <div>
                  <h4 className={`font-bold uppercase text-xs tracking-wider mb-1 ${isDarkMode ? 'text-purple-400' : 'text-slate-700'}`}>
                    Problem Statement
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{activeProject.problemStatement}</p>
                </div>

                <div>
                  <h4 className={`font-bold uppercase text-xs tracking-wider mb-1 ${isDarkMode ? 'text-purple-400' : 'text-slate-700'}`}>
                    Solution
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{activeProject.solution}</p>
                </div>

                <div>
                  <h4 className={`font-bold uppercase text-xs tracking-wider mb-1 ${isDarkMode ? 'text-purple-400' : 'text-slate-700'}`}>
                    How We Implemented
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{activeProject.implementation}</p>
                </div>

                <div>
                  <h4 className={`font-bold uppercase text-xs tracking-wider mb-1 ${isDarkMode ? 'text-purple-400' : 'text-slate-700'}`}>
                    Tech Stack
                  </h4>
                  <p className={`font-mono text-xs sm:text-sm inline-block px-3 py-1 rounded-md ${isDarkMode ? 'bg-purple-950/40 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                    {activeProject.techStack}
                  </p>
                </div>

                <div className={`pt-2 border-t ${isDarkMode ? 'border-purple-950/40' : 'border-gray-100'}`}>
                  <h4 className={`font-bold uppercase text-xs tracking-wider mb-1 ${isDarkMode ? 'text-purple-400' : 'text-slate-700'}`}>
                    Conclusion
                  </h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{activeProject.conclusion}</p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default Projects