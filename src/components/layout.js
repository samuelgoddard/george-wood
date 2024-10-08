import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"

import "../styles/main.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faMusic, faMapMarkerAlt, faEdit, faAddressCard, faNewspaper, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import { faDribbble, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(faMusic, faMapMarkerAlt, faDribbble, faTwitter, faInstagram, faEdit, faAddressCard, faNewspaper, faEnvelopeOpen)

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
    <div className={ location.pathname === "/" ? "transition duration-500 ease-in-out bg-off-black min-h-screen home" : "transition duration-500 ease-in-out min-h-screen" }>
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
        <div 
          className={ location.pathname === "/" ? "fixed bottom-0 left-0 w-full bg-off-black flex flex-wrap items-center justify-center z-40 border-black border-t md:hidden" : "fixed bottom-0 left-0 w-full bg-white flex flex-wrap items-center justify-center z-40 border-grey border-t md:hidden"}>
          <Link activeClassName="is--active" className={ location.pathname === "/" ? "mobile-link flex-1 text-white border-black border-r py-4 hover:bg-black focus:bg-black transition duration-300" : "mobile-link-internal flex-1 text-off-black border-grey border-r py-4 hover:bg-grey focus:bg-grey transition duration-300"} to="/">
            <FontAwesomeIcon className="mx-auto block w-5 h-5" icon={'edit'} />
          </Link>
          <a className={ location.pathname === "/" ? "mobile-link flex-1 text-white py-4 hover:bg-black focus:bg-black transition duration-300" : "mobile-link-internal flex-1 text-off-black py-4 hover:bg-grey focus:bg-grey transition duration-300"} href="mailto:georgewood.me@gmail.com">
            <FontAwesomeIcon className="mx-auto block w-5 h-5" icon={'envelope-open'} />
          </a>
        </div>
      </AnimatePresence>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
