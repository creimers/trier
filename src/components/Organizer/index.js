import React from 'react'
import styled from 'styled-components'

import { yellow } from './../../utils/constants'

import ContentWrapper from './../ContentWrapper'

const Anchor = styled.a`
  color: black;
`


class Organizer extends React.Component {
  render() {
    return (
      <ContentWrapper backgroundColor={yellow} >
        <h2>Organizer</h2>
        <p>Trier JS is organized by <Anchor rel="noopener noreferrer" href="https://www.superservice-international.com/" target="_blank">superservice-international</Anchor>.</p>
      </ContentWrapper>
    )
  }
}

export default Organizer
