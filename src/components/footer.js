import React from "react"
import PropTypes from "prop-types"
import NowPlaying from "./nowPlaying"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ path }) => (
  <div className="pb-16 md:pb-0">
    <div className={ path === "/" ? "bg-white w-full h-px opacity-10" : "bg-red w-full h-px opacity-10" }></div>
    <footer className="pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-auto">
            <div className={ path === "/" ? "text-white flex flex-wrap items-center" : "text-black flex flex-wrap items-center" }>
              <div className="flex md:items-center w-full md:w-auto mb-1 md:mb-0">
                <FontAwesomeIcon className="mr-2 align-middle inline-block w-4 h-4 mt-1 md:mt-0" icon="map-marker-alt" size="sm" />
                <span className="block mr-8">Nottingham, UK</span>
              </div>
              
              <div className="flex md:items-center w-full md:w-auto mb-4 md:mb-0">
                <FontAwesomeIcon className="mr-2 inline-block w-4 h-4 mt-1 md:mt-0" icon="music" size="sm" />
                <NowPlaying />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto ml-auto">
              <div className={ path === "/" ? "text-white flex flex-wrap items-center" : "text-black flex flex-wrap items-center" }>
              <a className="pr-2 md:pl-2 transition duration-500 ease-in-out hover:opacity-50 focus:opacity-50" href="https://dribbble.com/georgewood_me" target="_blank" rel="noopener noreferrer" aria-label="Dribble Icon">
                <FontAwesomeIcon className="mr-2 inline-block w-5 h-5" icon={['fab', 'dribbble']} />
              </a>
              <a className="pr-2 md:pl-2 transition duration-500 ease-in-out hover:opacity-50 focus:opacity-50" href="https://www.instagram.com/georgewood_me/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Icon">
                <FontAwesomeIcon className="mr-2 inline-block w-5 h-5" icon={['fab', 'instagram']} />
              </a>
              <a className="pr-2 md:pl-2 transition duration-500 ease-in-out hover:opacity-50 focus:opacity-50" href="https://twitter.com/georgewood_me/" target="_blank" rel="noopener noreferrer" aria-label="Twitter Icon">
                <FontAwesomeIcon className="mr-2 inline-block w-5 h-5" icon={['fab', 'twitter']} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  </div>
)

Footer.propTypes = {
  path: PropTypes.string,
}

Footer.defaultProps = {
  path: ``,
}

export default Footer
