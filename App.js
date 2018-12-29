import { createStackNavigator, createAppContainer } from 'react-navigation';

import PlayerScreen from './screens/PlayerScreen'
import RankingScreen from './screens/RankingScreen'
import WeaponScreen from './screens/WeaponScreen';


const App = createStackNavigator({
  Ranking: { screen: RankingScreen },
  Player: { screen: PlayerScreen },
  Weapon: { screen: WeaponScreen }
})

export default createAppContainer(App)
