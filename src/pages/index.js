import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ({ location }) => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <div className="container">
          <div className="w-11/12 md:w-9/12 mx-auto">
            <motion.div 
              className=""
              variants={item}
              transition="easeInOut"
            >
              <Link to="/" className="flex flex-wrap items-end px-2 md:px-3 lg:px-5 py-12 lg:py-16 hover:opacity-50 focus:opacity-50 transition duration-500 ease-in-out">
                <div className="w-auto mr-3">
                  <span className="text-xl md:text-2xl text-white opacity-25 block mb-8">1.</span>
                </div>
                <div className="flex-1">
                  <h2 className="title text-white mb-0 leading-none mb-2">Adtrak</h2>
                  <div className="flex flex-wrap">
                    <span className="block text-yellow mr-3 md:text-lg">UX</span>
                    <span className="block text-yellow mr-3 md:text-lg">UI</span>
                    <span className="block text-yellow mr-3 md:text-lg">Something</span>
                  </div>
                </div>
              </Link>
              <div className="w-full h-px bg-white opacity-10"></div>
            </motion.div>
            <motion.div 
              className=""
              variants={item}
              transition="easeInOut"
            >
              <Link to="/" className="flex flex-wrap items-end px-2 md:px-3 lg:px-5 py-12 lg:py-16 hover:opacity-50 focus:opacity-50 transition duration-500 ease-in-out">
                <div className="w-auto mr-3">
                  <span className="text-xl md:text-2xl text-white opacity-25 block mb-8">2.</span>
                </div>
                <div className="flex-1">
                  <h2 className="title text-white mb-0 leading-none mb-2">Something Else</h2>
                  <div className="flex flex-wrap">
                    <span className="block text-yellow mr-3 md:text-lg">UX</span>
                    <span className="block text-yellow mr-3 md:text-lg">UI</span>
                    <span className="block text-yellow mr-3 md:text-lg">Something</span>
                  </div>
                </div>
              </Link>
              <div className="w-full h-px bg-white opacity-10"></div>
            </motion.div>
            <motion.div 
              className=""
              variants={item}
              transition="easeInOut"
            >
              <Link to="/" className="flex flex-wrap items-end px-2 md:px-3 lg:px-5 py-12 lg:py-16 hover:opacity-50 focus:opacity-50 transition duration-500 ease-in-out">
                <div className="w-auto mr-3">
                  <span className="text-xl md:text-2xl text-white opacity-25 block mb-8">3.</span>
                </div>
                <div className="flex-1">
                  <h2 className="title text-white mb-0 leading-none mb-2">Third Eye</h2>
                  <div className="flex flex-wrap">
                    <span className="block text-yellow mr-3 md:text-lg">UX</span>
                    <span className="block text-yellow mr-3 md:text-lg">UI</span>
                    <span className="block text-yellow mr-3 md:text-lg">Something</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className=""
          variants={item}
          transition="easeInOut"
        >
          <Footer path={location.pathname} />
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage