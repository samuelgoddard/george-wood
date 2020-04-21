import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
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

const AboutPage = ({ location, data: { about } }) => {
  return (
    <>
      <SEO title={about.title} />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <div className="container">
          <div className="pt-12 pb-12 lg:pt-16 lg:pb-16 xl:pb-24">
            <div className="flex flex-wrap">
              <motion.div 
                className="content w-full md:w-1/2"
                variants={item}
                transition="easeInOut"
              >
                <h1 className="title text-red">{about.heading}</h1>
                <span className="block content content--fancy" dangerouslySetInnerHTML={{__html:about.introText}}></span>
              </motion.div>
              
              <motion.div 
                className="content w-full md:w-5/12 md:ml-auto z-20 relative"
                variants={item}
                transition="easeInOut"
              >
                <div className="">
                  <div className="flex flex-wrap justify-end md:absolute top-0 right-0 left-0 bottom-0 z-20 -mx-3 pr-16 mt-16 md:mt-0 -mb-32 md:-mb-0">
                    {about.gallery.map((node, index) => {
                      return (
                        <div className="w-1/2 px-3 pb-5 gallery-image">
                          <Img
                            key={index}
                            fluid={node.fluid}
                            key={node.title}
                            alt={node.alt}
                            className="w-full shadow shadow-lg"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          className=""
          variants={item}
          transition="easeInOut"
        >
          <div className="bg-red text-white py-16 md:py-20 xl:py-32 relative z-0">
            <div className="container">
              <div className="overflow-hidden">
                <div className="flex flex-wrap md:-mx-10">
                  <aside className="w-full md:w-1/3 md:px-10 mb-10 md:mb-0">

                  {
                    about.sidebar.map((block) => (
                      <div key={block.id}>
                        {
                          block.model.apiKey === 'list_item' &&
                          <div className="list list--fancy">
                            <span dangerouslySetInnerHTML={{__html:block.text}}></span>
                          </div>
                        }
                        {
                          block.model.apiKey === 'title' &&
                            <h3>{ block.text }</h3>
                        }
                      </div>
                    ))
                  }
                  </aside>
                  <div className="w-full md:w-1/2 xl:w-1/3 md:px-10">
                    {
                      about.experience.map((block, index) => {
                        const experienceLast = about.experience.length;
                        return (
                          <div key={block.id}>
                            {
                              block.model.apiKey === 'experience_item' &&
                              <div className="pb-6">
                                <div className="w-full pb-6">
                                  <span className="block text-white opacity-25 text-sm uppercase">{ block.date }</span>
                                  <span className="block text-white text-xl font-bold">{ block.jobTitle }</span>
                                  <span className="block text-white text-lg">{ block.employer }</span>
                                </div>
                                { experienceLast !== index + 1 && (
                                  <div className="w-full h-px bg-white opacity-10"></div>
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
        </motion.div>

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

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      title
      heading
      introText
      gallery {
        fluid(
          maxWidth: 900
          maxHeight: 900
          imgixParams: {h: "900", w: "900", fit: "crop", crop: "faces, center"}) {
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
    }
  }
`