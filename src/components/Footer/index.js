import React from 'react'
import styled from 'styled-components'

import { yellow } from './../../utils/constants'
import ContentWrapper from './../ContentWrapper'

const FooterWrapper = styled.footer`
  margin-top: 4rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Text = styled.div`
  margin-right: 5px;
`

class Footer extends React.Component {
  render() {
    return (
      <ContentWrapper backgroundColor={yellow} >
        <FooterWrapper>
          <Text>Domain via</Text>
          <a rel="noopener noreferrer" href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
            <img src="https://logo.js.org/dark_horz.png" width="50" alt="JS.ORG Logo"/>
          </a>
        </FooterWrapper>
      </ContentWrapper>
    )
  }
}

export default Footer
