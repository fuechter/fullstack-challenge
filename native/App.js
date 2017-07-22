import React, { Component } from 'react'
import ListTwitter from './screen/listTwitter'
import Profile from './screen/profile'
import { StackNavigator } from 'react-navigation'

const Router = StackNavigator({
  ListTwitter: { screen: ListTwitter },
  Profile: { screen: Profile }
})

export default class App extends Component {
  render() {
    return (
      <Router />
    )
  }
}
