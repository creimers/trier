import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DateIcon from './DateIcon'
import EventDetails from './EventDetails'

const EventWrapper = styled.div`
  margin-bottom: 25px;
`

const Link = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
`


class Event extends React.Component {
  render() {
    let {
      name,
      local_date,
      link,
      venue
      } = this.props.event 

    if (!venue) {
      venue = {name: "Still needs a location..."}
    }

    const date = local_date.split('-')

    return (
      <EventWrapper>
        <Link href={link} target="_blank">
          <DateIcon day={date[2]} month={date[1]} year={date[0]} />
          <EventDetails title={name} venueName={venue.name} />
        </Link>
      </EventWrapper>
    )
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

export default Event;
