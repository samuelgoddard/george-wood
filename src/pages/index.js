import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import Img from "gatsby-image"

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

const IndexPage = ({ location, data: { work, about } }) => {
  return (
    <>
      <SEO
        titleOverride={ "UX & UI Design Nottingham" }
        pathnameOverride={ location.pathname}
      />

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
                <span className="text-white">— Digital Designer</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container">
          <div className="pt-12 pb-12 lg:pt-16 lg:pb-16 xl:pb-24">
            <div className="flex flex-wrap md:-mx-5">
              <motion.div 
                className="content w-full md:w-5/12 md:px-5"
                variants={item}
                transition="easeInOut"
              >
                <h1 className="title text-white">{about.heading}</h1>
                <span className="block text-white content content--fancy mb-12 md:mb-20" dangerouslySetInnerHTML={{__html:about.introText}}></span>

                <aside className="w-full md:w-full text-white mb-6 md:mb-0">
                  {
                    about.sidebar.map((block) => (
                      <div key={block.id} className="flex -full">
                        {
                          block.model.apiKey === 'list_item' &&
                          <div className="list list--fancy-new">
                            <span dangerouslySetInnerHTML={{__html:block.text}}></span>
                          </div>
                        }
                        {
                          block.model.apiKey === 'title' &&
                            <h4 className="uppercase w-full">{ block.text }</h4>
                        }
                      </div>
                    ))
                  }
                </aside>
              </motion.div>
              
              <motion.div 
                className="content gallery md:w-1/2 xl:w-7/12 md:ml-auto z-20 relative md:px-5 md:mt-16 lg:mt-0 lg:-mt-8"
                variants={item}
                transition="easeInOut"
              >
                <div className="-mb-40 md:-mb-64 md:-mr-16 xl:-mr-16">
                  <div className="z-20">
                    <Img
                      fluid={about.gallery.fluid}
                      key={about.gallery.title}
                      alt={about.gallery.alt}
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full mx-auto mt-32 md:mt-20">
            {work.edges.map(({ node }, index) => {
              const workLast = work.edges.length;
              return (
              <motion.div 
                className=""
                variants={item}
                transition="easeInOut"
                key={index}
              >
                <Link to={`work/${node.slug}`} className="flex flex-wrap items-end py-10 lg:py-12 hover:opacity-50 focus:opacity-50 transition duration-500 ease-in-out">
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
          className=""
          variants={item}
          transition="easeInOut"
        >
          <div className="bg-off-black text-white pt-12 pb-16 md:pt-20 md:pb-20 xl:pt-32 xl:pb-32 relative z-0">
            <div className="container">
              <div className="overflow-hidden">
                <div className="flex flex-wrap md:-mx-10">
                  <div className="w-full md:w-1/2 lg:w-9/12 xl:w-1/2 md:px-10 mb-12 md:mb-0 lg:mb-16 xl:mb-0">
                    <h4 className="uppercase mb-5 md:mb-8">Experience</h4>
                    {
                      about.experience.map((block, index) => {
                        const experienceLast = about.experience.length;
                        return (
                          <div key={block.id}>
                            {
                              block.model.apiKey === 'experience_item' &&
                              <div className="pb-2">
                                <div className="w-full lg:flex items-center">
                                  <span className="block text-white text-lg font-bold">{ block.jobTitle }</span><span className="hidden lg:inline-block">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                                  <span className="block text-white text-lg">{ block.employer }</span>
                                  <span className="block text-yellow text-sm uppercase tracking-widest ml-auto">{ block.date }</span>
                                </div>
                                { experienceLast !== index + 1 && (
                                  <div className="w-full h-px bg-white opacity-10 mt-2"></div>
                                )}
                              </div>
                            }
                          </div>
                        )
                      })
                    }
                  </div>

                  <div className="w-full md:w-1/2 lg:w-9/12 xl:w-1/2 md:px-10 md:ml-auto">
                    <h4 className="uppercase mb-5 md:mb-8">Select Clients</h4>
                    
                    <div className="flex flex-wrap">
                      {
                        about.selectClients.map((block, index) => {
                          const experienceLast = about.selectClients.length;
                          return (
                            <div key={block.id} className="w-full md:w-1/2">
                              {
                                block.model.apiKey === 'client' &&
                                <div className="pb-2">
                                  <div className="w-full lg:flex items-center">
                                    <span className="block text-white text-lg">{ block.title }</span>
                                  </div>
                                  { experienceLast !== index + 1 && (
                                    <div className="w-full h-px bg-white opacity-10 mt-2"></div>
                                  )}
                                </div>
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
    about: datoCmsAbout {
      title
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      heading
      introText
      gallery {
        fluid(
          imgixParams: {}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
        title
        alt
      }
      sidebar {
        ... on DatoCmsListItem {
          id
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsTitle {
          id
          model {
            apiKey
          }
          text
        }
      }
      experience {
        children {
          id
        }
        ... on DatoCmsExperienceItem {
          model {
            apiKey
          }
          date
          jobTitle
          employer
        }
      }
      selectClients {
        children {
          id
        }
        ... on DatoCmsClient {
          model {
            apiKey
          }
          title
        }
      }
    }
  }
`
