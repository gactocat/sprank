import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

export default class WeaponScreen extends React.Component {
  static navigationOptions = {
    title: 'Weapon',
  }
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Weapon page!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})