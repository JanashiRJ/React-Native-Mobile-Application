import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import OnboardScreen from '../screens/OnboardScreen';

const PrimaryNavigator = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <PrimaryNavigator.Navigator
          headerMode={{}}
          initialRouteName="OnboardScreen">
          <PrimaryNavigator.Screen
            name="OnboardScreen"
            component={OnboardScreen}
          />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
