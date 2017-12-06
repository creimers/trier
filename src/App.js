import React, { Component } from 'react';

import About from './components/About'
import EventList from './containers/EventList'
import Header from './containers/Header'
import Organizer from './components/Organizer'
import Footer from './components/Footer'

const upcomingEventsUrl = "https://jstrier.superservice-international.com/"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <EventList url={upcomingEventsUrl} title="Upcoming Events" />
        <Organizer />
        <Footer />
      </div>
    );
  }
}

export default App;
