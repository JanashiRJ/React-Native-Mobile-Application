import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import OnboardScreen from '../screens/OnboardScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FirstScreen from '../screens/FirstScreen';
import HomeScreen from '../screens/HomeScreen';

const PrimaryNavigator = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <PrimaryNavigator.Navigator
          headerMode={{}}
          initialRouteName="FirstScreen">
          <PrimaryNavigator.Screen
            name="OnboardScreen"
            component={OnboardScreen}
          />
          <PrimaryNavigator.Screen
            name="SignInScreen"
            component={SignInScreen}
          />
          <PrimaryNavigator.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <PrimaryNavigator.Screen name="FirstScreen" component={FirstScreen} />
          <PrimaryNavigator.Screen name="HomeScreen" component={HomeScreen} />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
