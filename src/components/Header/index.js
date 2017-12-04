import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContentWrapper from './../ContentWrapper'
import Logo from './Logo'
import Title from './Title'


const HeaderOuter = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LogoItem = styled.div`
  flex: ${props => props.flex};
  transition: all .75s ease;
  align-items: ${props => props.alignItems || 'center'};
  overflow: hidden;
  display: flex;
`


class Header extends React.Component {
  render() {
    return (
      <HeaderOuter>
        <ContentWrapper>
          <LogoWrapper>

            <LogoItem flex={4}>
              <Logo
                showLogo={this.props.showLogo}
                showIcon={this.props.showIcon}
              />
            </LogoItem>

            <LogoItem
              flex={this.props.showTitle ? 2 : 0}
              alignItems={'flex-start'}
            >
              <Title visible={this.props.showTitle}/>
            </LogoItem>

          </LogoWrapper>
        </ContentWrapper>
      </HeaderOuter>
    )
  }
}

Header.propTypes = {
  showLogo: PropTypes.bool,
  showIcon: PropTypes.bool,
  showTitle: PropTypes.bool
}

export default Header
