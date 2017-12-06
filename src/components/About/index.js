import React from 'react'

import { yellow } from './../../utils/constants'

import ContentWrapper from './../ContentWrapper'

class About extends React.Component {
  render() {
    return (
      <ContentWrapper backgroundColor={yellow} >
        <h2>About</h2>
        <p>Trier JS is welcoming everyone in and around Germany's oldest city interested in the programing language JavaScript. We'll try to be a classical software meetup, getting together once a month, ideally listening to a talk, chatting, joking, networking.</p>
      </ContentWrapper>
    )
  }
}

export default About
