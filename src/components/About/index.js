import React from 'react'

import { yellow } from './../../utils/constants'

import ContentWrapper from './../ContentWrapper'

class About extends React.Component {
  render() {
    return (
      <ContentWrapper backgroundColor={yellow} >
        <h2>About</h2>
        <p>Lorem in vel harum tempore cum? Dicta incidunt rem molestiae ex odio. Commodi quam dolorum dolorem id iusto. Tempore magnam natus natus officia voluptatem perspiciatis, repudiandae consequatur Repellendus blanditiis maxime</p>
      </ContentWrapper>
    )
  }
}

export default About
