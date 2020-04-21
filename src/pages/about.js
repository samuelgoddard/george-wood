import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
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

const AboutPage = ({ location }) => {
  return (
    <>
      <SEO title="About" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <div className="container">
          <motion.div 
            className="content"
            variants={item}
            transition="easeInOut"
          >
            <div className="w-10/12 md:w-1/2 py-12 lg:py-16">
              <h1 className="title text-red">Ey Up,</h1>
              
              <p className="text-lg text-red">I’m George. Lorem ipsum dolor sit amet, consecter adipiscing elit. Aenean in diam ante. Cras lobortis a orci sed tempus. Nulla ornare mi in lacus dignissim.</p>
              
              <p>Etiam arcu nisl, suscipit quis scelerisque ac, venenatis et felis. Curabitur cursus augue vitae laoreet interdum. Mauris cursus nec orci ut pellentesque. Pellentesque id congue turpis.</p>
            </div>
          </motion.div>
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

export default AboutPage