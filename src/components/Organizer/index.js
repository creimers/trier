import React from 'react'

import Logo from './Logo'

import ContentWrapper from './../ContentWrapper'


class Organizer extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <h2>Organizer</h2>
        <a href="https://www.superservice-international.com/">
          <Logo />
        </a>
      </ContentWrapper>
    )
  }
}

export default Organizer
