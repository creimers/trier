import React, { Component } from 'react';

import EventList from './containers/EventList'
import Header from './containers/Header'

const upcomingEventsUrl = "https://api.meetup.com/PythonTrier/events?photo-host=public&page=20&sig_id=59619842&sig=5c86753ea007f1f1085aead5811592e23c287b5e"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <EventList url={upcomingEventsUrl} title="Upcoming Events" />
      </div>
    );
  }
}

export default App;
