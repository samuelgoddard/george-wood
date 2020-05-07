import React from "react"
import { Link } from "gatsby"
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

const BlogIndexPage = ({ data: { articles }, location }) => {
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
                <span className="w-5 h-px bg-black mx-3 opacity-25"></span>
                <span className="text-black">Blog</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container">
          <div className="w-full md:w-9/12 mx-auto">


            {articles.edges.map(({ node }, index) => {
              const date = new Date(node.meta.createdAt);
              const month = date.toLocaleString('default', { month: 'short' });
              const year = date.getFullYear();
              const articleLast = articles.edges.length;

              return (
                <motion.div 
                  className=""
                  variants={item}
                  transition="easeInOut"
                  key={index}
                >
                  <Link to={`blog/${node.slug}`} className="px-2 md:px-3 lg:px-5 block py-12 lg:py-16 hover:opacity-50 focus:opacity-50 transition duration-500 ease-in-out">
                    <h2 className="title text-red mb-0 leading-none mb-2">{ node.title }</h2>

                    <span className="block text-grey-dark uppercase tracking-widest">{ month } { year }</span>
                  </Link>
                  { articleLast !== index + 1 && (
                    <div className="w-full h-px bg-red opacity-10"></div>
                  )}
                </motion.div>
              )
            })}
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

export default BlogIndexPage

export const query = graphql`
  query BlogIndexPageQuery {
    articles: allDatoCmsBlog {
      edges {
        node {
          id
          slug
          title
          meta {
            createdAt
          }
        }
      }
    }
  }
`
