import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO
      titleOverride={ "Page Not Found" }
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
