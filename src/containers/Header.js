import React from 'react'
import styled from 'styled-components'

import Header from './../components/Header'

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
    }, 500)

    setTimeout(() => {
      this.setState({showIcon: true})
    }, 1500)

    setTimeout(() => {
      this.setState({showTitle: true})
    }, 2250)
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
