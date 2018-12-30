import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class RankingScreen extends React.Component {
  static navigationOptions = {
    title: 'Ranking',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.container}>
        <Text>Ranking page!</Text>
        <Button
          title="Go to Player page"
          onPress={() => navigate('Player', { name: 'Jane' })}
        />
        <Button
          title="Go to Weapon page"
          onPress={() => navigate('Weapon', { name: 'Jane' })}
        />
      </View>
    );
  }
}
