import React from 'react'
import PropTypes from 'prop-types'

import { yellow } from './../../utils/constants'

import ContentWrapper from './../ContentWrapper'
import Event from './Event'


class EventList extends React.Component {
  renderContent = () => {
    const { isLoading, loadingError, events } = this.props
    if (isLoading && !loadingError) {
      return <p>Loading events...</p>
    } else if (!isLoading && loadingError) {
      return <p>An error occured while loading the events...</p>
    } else if (!isLoading && !loadingError && events.length === 0) {
        return <p>No events.</p>
    } else {
        return this.props.events.map((event, index) => <Event key={index} event={event} />)
    }
  }

  render() {
    const { title } = this.props
    return (
      <ContentWrapper backgroundColor={yellow} >
        <h2>{title}</h2>
        {this.renderContent()}
      </ContentWrapper>
    )
  }
}

EventList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default EventList
