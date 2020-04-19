import React from "react"
import PropTypes from "prop-types"

const Footer = ({ path }) => (
  <div className="pt-12 md:pt-16">
    <div className={ path === "/" ? "bg-white w-full h-px opacity-10" : "bg-red w-full h-px opacity-10" }></div>
    <footer className="pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-auto">
            <div className={ path === "/" ? "text-white flex flex-wrap items-center mb-4" : "text-red flex flex-wrap items-center mb-4" }>
              <span className="block mr-8">Nottingham, UK</span>
              <span className="block">I've just listened to <strong>This Song</strong> by <strong>This Artist</strong></span>
            </div>
          </div>

          <div className="ml-auto hidden md:block">
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
