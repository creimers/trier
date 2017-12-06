import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 8vmin;
  opacity: ${props => props.visible ? 1 : 0 };
  transition: all 1s linear .75s;
  margin: 0;
`

class Title extends React.Component {
  render() {
    return (
      <H1 visible={this.props.visible}>JavaScript <br/> Usergroup <br/> Trier</H1>
    )
  }
}

export default Title
