import React, { Component, PropTypes } from 'react'
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class List extends Component {

  static propTypes = {
    items: PropTypes.array,
    onSelectItem: PropTypes.func
  }

  static defaultProps = {
    onSelectItem: f => f
  }

  _keyExtractor = (item, index) => item.id;

  onSelectItem = (item) => {
    const { onSelectItem } = this.props
    onSelectItem(item)
  }

  renderItem = ({item, key}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={this.onSelectItem.bind(this, item)}>
        <View style={styles.header}>
          <Image style={{width: 50, height: 50}} source={{uri: item.user.profile_image_url.replace('http', 'https')}} />
          <Text>{item.user.name}</Text>
        </View>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    const { items } = this.props
    return (
      <View>
        <FlatList data={items} renderItem={this.renderItem.bind(this)} keyExtractor={this._keyExtractor} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  header: {
    flexDirection: 'row'
  }
})
