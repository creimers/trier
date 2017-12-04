import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Header from './../components/Header'
import Logo from './../components/Header/Logo'
import Title from './../components/Header/Title'
import { yellow } from './../utils/constants'


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
