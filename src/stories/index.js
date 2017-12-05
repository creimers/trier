import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import events from './events.json'
import { yellow } from './../utils/constants'

import Header from './../components/Header'
import Logo from './../components/Header/Logo'
import Title from './../components/Header/Title'

import Event from './../components/EventList/Event'
import EventList from './../components/EventList'
import DateIcon from './../components/EventList/Event/DateIcon'


storiesOf('Header', module)
  .add('header without icon', () => <Header showIcon={false}></Header>)
  .add('header with logo', () => {
    return (
      <Header
        backgroundColor={'#ffffff'}
        showIcon={true}
        showTitle={false}
      >
      </Header>
    )
  })
  .add('header logo and title', () => {
    return (
      <Header
        backgroundColor={'#ffffff'}
        showIcon={true}
        showTitle={true}
      >
      </Header>
    )
  })

storiesOf('Logo', module)
  .add('visible icon', () => <Logo showIcon={true} />)
  .add('Invisible icon', () => <Logo showIcon={false} />)

storiesOf('Title', module)
  .add('visible title', () => <Title visible={true} />)
  .add('Invisible title', () => <Title />)

storiesOf('Events', module)
  .add('event list loaded', () => <EventList events={events} title="Upcoming Events" isLoading={false} loadingError={false}/>)
  .add('event list loading', () => <EventList events={[]} title="Upcoming Events" isLoading={true} loadingError={false}/>)
  .add('event list loading error', () => <EventList events={[]} title="Upcoming Events" isLoading={false} loadingError={true}/>)
  .add('event item', () => <Event event={events[0]} />)
  .add('date icon', () => <DateIcon day={'01'} month={'12'} year={'2017'} />)
