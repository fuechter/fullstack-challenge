import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../relay-environment'
import get from 'lodash/get'

import List from '../components/list'
import Loading from '../components/loading'

const query = graphql`
  query profileQuery($identity: UserIdentity!) {
    user(identifier: name, identity: $identity) {
      id
      description
      name
      screen_name
      tweets_count
      followers_count
      profile_image_url,
      tweets {
        user {
          id
          screen_name
          profile_image_url
        }
        id
        text
      }
    }
  }
`

export default class Profile extends Component {

  static navigationOptions = {
    title: 'Perfil'
  }

  render() {

    const confQueryRenderer = {
      environment,
      query,
      variables: {
        identity: this.props.navigation.state.params.identity
      },
      render: ({error, props}) => {
        if (error) {
          return <Text>{error.message}</Text>;
        } else if (props) {
          return (
            <View>
              <Image style={{width: 50, height: 50}} source={{uri: props.user.profile_image_url}} />
              <Text>{props.user.name}</Text>
              <Text>@{props.user.screen_name}</Text>
              <Text>{props.user.tweets_count}</Text>
              <Text>{props.user.description}</Text>
              <List items={props.user.tweets} />
            </View>
          )
        }
        return <Loading />;
      }
    }

    return <QueryRenderer {...confQueryRenderer}/>
  }
}
