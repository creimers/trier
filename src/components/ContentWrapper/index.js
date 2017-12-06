import React from 'react'
import styled from 'styled-components'

import { maxWidth } from './../../utils/constants'

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'white'}
`

const Container = styled.div`
  max-width: ${props => props.maxWidth || maxWidth};
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
  height: 100%;
`

class ContentWrapper extends React.Component {
  render() {
    return(
      <Wrapper {...this.props}>
        <Container {...this.props}>
          {this.props.children}
        </Container>
      </Wrapper>
    )
  }
}

export default ContentWrapper
