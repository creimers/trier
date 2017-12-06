import React from 'react'

import { yellow } from './../../utils/constants'

import Logo from './Logo'
import ContentWrapper from './../ContentWrapper'


class Organizer extends React.Component {
  render() {
    return (
      <ContentWrapper backgroundColor={yellow} >
        <h2>Organizer</h2>
        <a href="https://www.superservice-international.com/" target="_blank">
          <Logo />
        </a>
      </ContentWrapper>
    )
  }
}

export default Organizer
