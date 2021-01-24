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
      <SEO
        titleOverride={ about.metaTags && about.metaTags.title ? about.metaTags.title : about.title }
        descriptionOverride={ about.metaTags && about.metaTags.description ? about.metaTags.description : null }
        pathnameOverride={ location.pathname}
        imageOverride={ about.metaTags && about.metaTags.image ? about.metaTags.image.url : null }
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
                <span className="text-black">About Me</span>
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
                <h1 className="title text-red">{about.heading}</h1>
                <span className="block content content--fancy" dangerouslySetInnerHTML={{__html:about.introText}}></span>
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

        <motion.div 
          className=""
          variants={item}
          transition="easeInOut"
        >
          <div className="bg-red text-white pt-32 pb-16 md:pt-20 md:pb-20 xl:pt-32 xl:pb-32 relative z-0">
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
                                  <span className="block text-white opacity-25 text-sm uppercase tracking-widest">{ block.date }</span>
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
    }
  }
`