import React from 'react'
import PropTypes from 'prop-types'

import EventList from './../components/EventList'


class EventListContainer extends React.Component {

  state = {
    events: [],
    isLoading: true,
    loadingError: false
  }

  componentDidMount() {
    this.loadEvents()
  }
  
  loadEvents = () => {
    this.setState({isLoading: true})
    try {
      fetch(this.props.url, {mode: 'cors', credentials: 'omit'})
        .then(response => response.json())
        .then(json =>  this.setState({isLoading: false, events: json}))
        .catch(err => this.setState({loadingError: true, isLoading: false}))
    } catch (err) {
      this.setState({loadingError: true, isLoading: false})
    }
  }

  render() {
    const { isLoading, loadingError, events } = this.state
    return (
      <EventList
        title={this.props.title}
        events={events}
        isLoading={isLoading}
        loadingError={loadingError}
        />
    )
    
  }
}

EventListContainer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default EventListContainer
