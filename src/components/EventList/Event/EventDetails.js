import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailsWrapper = styled.div`
  margin-left: 25px;
`

const Title = styled.h3`
  margin-top: 0px;
  font-size: 1.5em;
`

const Location = styled.p`
  font-size: 1em;
`

class EventDetails extends React.Component {
  render() {
    return (
      <DetailsWrapper>
        <Title>{this.props.title}</Title>
        <Location>{this.props.venueName}</Location>
      </DetailsWrapper>
    )
  }
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired
}

export default EventDetails
