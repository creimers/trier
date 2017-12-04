import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 3em;
  opacity: ${props => props.visible ? 1 : 0 };
  transition: all 1s linear;
`

class Title extends React.Component {
  render() {
    return (
      <H1 visible={this.props.visible}>JavaScript <br/> Usergroup <br/> Trier</H1>
    )
  }
}

export default Title
