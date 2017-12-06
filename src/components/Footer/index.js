import React from 'react'
import styled from 'styled-components'

import { yellow } from './../../utils/constants'
import ContentWrapper from './../ContentWrapper'

const FooterWrapper = styled.footer`
  margin-bottom: 3rem;
`

class Footer extends React.Component {
  render() {
    return (
      <ContentWrapper backgroundColor={yellow} >
        <FooterWrapper>
        </FooterWrapper>
      </ContentWrapper>
    )
  }
}

export default Footer
