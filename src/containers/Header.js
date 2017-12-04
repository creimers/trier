import React from 'react'
import styled from 'styled-components'

import Header from './../components/Header'
import { yellow } from './../utils/constants'

const HeaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

class HeaderContainer extends React.Component {
  state = {
    showLogo: false,
    showIcon: false,
    showTitle: false
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({showLogo: true})
    }, 750)

    setTimeout(() => {
      this.setState({showIcon: true})
    }, 1250)

    setTimeout(() => {
      this.setState({showTitle: true})
    }, 2500)
  }

  render() {
    const { showIcon, showTitle, showLogo } = this.state
    return (
      <HeaderWrapper>
        <Header
          showLogo={showLogo}
          showIcon={showIcon}
          showTitle={showTitle}
        /> 
      </HeaderWrapper>
    )
  }
}

export default HeaderContainer
