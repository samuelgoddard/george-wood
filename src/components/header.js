import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ path }) => {
  return (
    <header className="py-8 md:py-12">
      
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-auto">
            <div className="flex flex-wrap items-center mb-4">
              <Link
                className={ path === "/" ? "text-white block text-2xl md:text-3xl inline-block h1 mb-0 leading-none" : "text-red block text-2xl md:text-3xl inline-block h1 mb-0 leading-none" }
                to="/"
              >
                george<span className="block ml-10">wood.</span>
              </Link>
            </div>
          </div>

          <div className="ml-auto hidden md:block">
            <ul className="flex flex-wrap">
              <li className={ path.includes("/work") ? "psuedo-active" : ""}>
                <Link
                // partiallyActive={true}
                  activeClassName="is--active"
                  className={ path === "/" ? "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-white" : "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-black" }
                  to="/"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link activeClassName="is--active" partiallyActive={true} className={ path === "/" ? "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-white" : "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-black" } to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link activeClassName="is--active" partiallyActive={true} className={ path === "/" ? "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-white" : "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-black" } to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <a className={ path === "/" ? "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-white" : "link uppercase tracking-widest p-2 mx-2 lg:mx-4 xl:mx-8 ml-0 lg:ml-0 xl:ml-0 text-sm text-black" } href="mailto:georgewood.me@gmail.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  )
}

Header.propTypes = {
  path: PropTypes.string,
}

Header.defaultProps = {
  path: ``,
}

export default Header
