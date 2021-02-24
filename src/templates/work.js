import React from "react"
import Img from "gatsby-image"

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

const WorkPage = ({ location, pageContext, data: { current }}) => {
  const { prev } = pageContext;
  const date = new Date(current.dateCompleted);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return (
    <>
      <SEO
        titleOverride={ current.metaTags && current.metaTags.title ? current.metaTags.title : current.title }
        descriptionOverride={ current.metaTags && current.metaTags.description ? current.metaTags.description : null }
        pathnameOverride={ location.pathname}
        imageOverride={ current.metaTags && current.metaTags.image ? current.metaTags.image.url : null }
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
              <div className="flex flex-wrap items-center ml-5 md:ml-1">
                <span className="w-5 h-px bg-black mx-3 opacity-25"></span>
                <span className="text-black">Work / <strong>{ current.title }</strong></span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden" 
          animate="visible"
        >
          <div className="container mb-2 md:mb-8">
            <div className="w-full md:w-9/12 mx-auto">
              <div className="flex flex-wrap items-start py-12 lg:py-16">
                <div className="w-auto mr-8 md:mr-12 mt-2 md:mt-3 lg:mt-4">
                  <span className="text-grey-dark uppercase md:text-lg text-orientation transform rotate-60 tracking-widest">{ month } { year }</span>
                </div>
                <div className="flex-1">
                  <div className="w-10/12">
                    <h1 className="title text-red">{ current.title }</h1>
                  
                    <span className="block text-lg lg:text-xl text-red mb-0 pb-0" dangerouslySetInnerHTML={{__html:current.introText}}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {
          current.content.map((block) => (
            <div key={block.id}>
              {
                block.model.apiKey === 'section' &&
                <motion.div 
                  variants={container}
                  initial="hidden" 
                  animate="visible"
                >
                  <div className="container mb-16 md:mb-20 xl:mb-24">
                    <div className="w-full md:w-9/12 mx-auto">
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap md:-mx-6">
                          <div className="w-full md:w-5/12 md:px-6">
                            { block.heading && (
                              <h2>{block.heading }</h2>
                            )}
                          </div>
                          <div className="w-full md:w-7/12 md:px-6">
                            <span className="block content" dangerouslySetInnerHTML={{__html:block.text}}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
              {
                block.model.apiKey === 'quote' &&
                  <motion.div 
                    variants={container}
                    initial="hidden" 
                    animate="visible"
                  >
                    <div className="container mb-12 md:mb-20 xl:mb-24">
                      <div className="w-10/12 lg:w-7/12 xl:w-8/12 mx-auto">
                        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red uppercase text-center tracking-widest">
                          { block.text }
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
              }
              {
                block.model.apiKey === 'split_image' &&
                <motion.div 
                  variants={container}
                  initial="hidden" 
                  animate="visible"
                >
                  <div className="container">
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap md:-mx-6">
                        <div className="w-full md:w-1/2 md:px-6 mb-8 md:mb-20 xl:mb-24">
                          <figure>
                            <Img fluid={block.image1.fluid} key={block.image1.title} alt={block.image1.alt} className="w-full" />
                            { block.image1.title && (
                              <figcaption className="border-b border-grey p-3">{ block.image1.title }</figcaption>
                            )}
                          </figure>
                        </div>
                        <div className="w-full md:w-1/2 md:px-6 mb-12 md:mb-20 xl:mb-24">
                        <figure>
                            <Img fluid={block.image2.fluid} key={block.image2.title} alt={block.image2.alt} className="w-full" />
                            { block.image2.title && (
                              <figcaption className="border-b border-grey p-3">{ block.image2.title }</figcaption>
                            )}
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              }
              {
                block.model.apiKey === 'full_image' &&
                <motion.div 
                  variants={container}
                  initial="hidden" 
                  animate="visible"
                >
                  <div className="container container--no-pad mb-12 md:mb-20 xl:mb-24">
                    <figure>
                      <Img fluid={block.image.fluid} key={block.image.title} alt={block.image.alt} className="w-full" />
                      { block.image.title && (
                        <figcaption className="border-b border-grey p-3">{ block.image.title }</figcaption>
                      )}
                    </figure>
                  </div>
                </motion.div>
              }
            </div>
          ))
        }

        { prev &&(
          <motion.div 
            variants={container}
            initial="hidden" 
            animate="visible"
          >
            <div className="container text-center md:mb-8 xl:mb-12">
              <Link to={`/work/${prev.node.slug}/`} className="text-red hover:text-black focus:text-black transition duration-500 ease-in-out">
                <span className="block text-black text-base uppercase tracking-widest">Next Project</span>
                <div className="block text-4xl md:text-6xl xl:text-7xl font-serif" dangerouslySetInnerHTML={{ __html: prev.node.title }}></div>
              </Link>
            </div>
          </motion.div>
        )}

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

export default WorkPage

export const query = graphql`
  query WorkQuery($slug: String!) {
    current: datoCmsWork(slug: { eq: $slug }) {
      title
      slug
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      dateCompleted
      categories {
        title
      }
      introText
      content {
        ... on DatoCmsSection {
          id
          model {
            apiKey
          }
          heading
          text
        }
        ... on DatoCmsSplitImage {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              maxWidth: 1200
              maxHeight: 1200
              imgixParams: {h: "1200", w: "1200", fit: "crop", crop: "faces, edges", fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            title
            alt
          }
          image2 {
            fluid(
              maxWidth: 1200
              maxHeight: 1200
              imgixParams: {h: "1200", w: "1200", fit: "crop", crop: "faces, edges", fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            title
            alt
          }
        }
        ... on DatoCmsQuote {
          id
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsFullImage {
          id
          model {
            apiKey
          }
          image {
            fluid(
              maxWidth: 1600,
              imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces, edges" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            title
            alt
          }
        }
      }
    }
  }
`
