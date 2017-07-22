import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../relay-environment'
import get from 'lodash/get'

import List from '../components/list'
import Loading from '../components/loading'

const query = graphql`
  query listTwitterQuery {
    search(q: "Javascript", count: 20, result_type: mixed) {
      user {
        name
        screen_name
        profile_image_url
      }
      id
      text
    }
  }
`

export default class ListTwitter extends Component {

  static navigationOptions = {
    title: 'Twitter'
  }

  onSelectItem = (tweet) => {
    const { navigation } = this.props
    navigation.navigate('Profile', {identity: tweet.user.screen_name})
  }

  render() {

    const confQueryRenderer = {
      environment,
      query,
      render: ({error, props}) => {
        if (error) {
          return <Text>{error.message}</Text>;
        } else if (props) {
          return (
            <View>
              <List items={get(props, 'search', [])} onSelectItem={this.onSelectItem} />
            </View>
          )
        }
        return <Loading />;
      }
    }

    return <QueryRenderer {...confQueryRenderer}/>
  }
}
