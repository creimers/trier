import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DateIcon from './DateIcon'
import EventDetails from './EventDetails'

const EventWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
`


class Event extends React.Component {
  render() {
    const {
      name,
      local_date,
      local_time,
      yes_rsvp_count,
      link,
      description,
      venue
      } = this.props.event 

    const date = local_date.split('-')

    return (
      <EventWrapper>
        <DateIcon day={date[2]} month={date[1]} year={date[0]} />
        <Link href={link} target="_blank">
          <EventDetails title={name} venueName={venue.name} />
        </Link>
      </EventWrapper>
    )
  }
}

export default Event;
