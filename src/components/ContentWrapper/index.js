import React from 'react'
import styled from 'styled-components'

import { maxWidth } from './../../utils/constants'

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  max-width: ${maxWidth};
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
  height: 100%;
`

class ContentWrapper extends React.Component {
  render() {
    return(
      <Wrapper>
        <Container>
          {this.props.children}
        </Container>
      </Wrapper>
    )
  }
}

export default ContentWrapper
