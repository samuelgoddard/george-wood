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

const IndexPage = ({ location, data: { work} }) => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <motion.div 
          variants={container}
          initial="hidden" 
          animate="visible"
        >
          <div className="container relative -mt-1 md:-mt-2">
            <div className="absolute top-0 left-0 -mt-20 md:-mt-24 ml-32 md:ml-40">
              <div className="flex flex-wrap items-center ml-1">
                <span className={ location.pathname === "/" ? "w-5 h-px bg-grey mx-3 opacity-25" : "w-5 h-px bg-black mx-3 opacity-25" }></span>
                <span className={  location.pathname === "/" ? "text-yellow" : "text-black"}>UX / UI Designer</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container">
          <div className="w-full md:w-9/12 mx-auto">


            {work.edges.map(({ node }, index) => {
              const workLast = work.edges.length;
              return (
              <motion.div 
                className=""
                variants={item}
                transition="easeInOut"
                key={index}
              >
                <Link to={`work/${node.slug}`} className="flex flex-wrap items-end px-2 md:px-3 lg:px-5 py-12 lg:py-16 hover:opacity-50 focus:opacity-50 transition duration-500 ease-in-out">
                  <div className="w-auto mr-3 -mb-1 md:mb-0">
                    <span className="text-xl md:text-2xl text-white opacity-25 block mb-8">{ index + 1}.</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="title text-white mb-0 leading-none mb-2">{ node.title }</h2>
                    <div className="flex flex-wrap">
                      {node.categories.map(({ title }, index) => {
                        const catLast = node.categories.length;
                        return (
                          <div key={index} className="flex">
                            <span className="block text-yellow md:text-lg">{ title }</span>
                            { catLast !== index + 1 && (
                              <span className="block text-yellow mx-2 md:text-lg">•</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Link>
                { workLast !== index + 1 && (
                  <div className="w-full h-px bg-white opacity-10"></div>
                )}
              </motion.div>
            )})}
          </div>
        </div>

        <motion.div 
          className="pt-12 md:pt-16"
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

export const query = graphql`
  query IndexQuery {
    work: allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          categories {
            title
          }
        }
      }
    }
  }
`
