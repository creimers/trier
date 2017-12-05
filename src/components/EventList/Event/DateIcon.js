import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { yellow } from './../../../utils/constants'

const squareDimension = 100

const YellowSquare = styled.div`
  background-color: ${yellow};
  height: ${squareDimension}px;
  width: ${squareDimension}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
  font-weight: bold;
`


class DateIcon extends React.Component {
  render() {
    return (
      <YellowSquare>
        <div>{this.props.day}</div>
        <div>{this.props.month}</div>
        <div>{this.props.year}</div>
      </YellowSquare>
    )
  } 
}

export default DateIcon
