import React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from 'framer-motion'

import Header from "./header"

import "../styles/main.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faMusic, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faDribbble, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(faMusic, faMapMarkerAlt, faDribbble, faTwitter, faInstagram)

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
  return (
    <div className={ location.pathname === "/" ? "transition duration-500 ease-in-out bg-red min-h-screen " : "transition duration-500 ease-in-out min-h-screen" }>
      <Header path={location.pathname} />
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
        {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
