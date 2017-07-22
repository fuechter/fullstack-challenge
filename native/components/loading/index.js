import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default class Loading extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
