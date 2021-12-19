import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import OnboardScreen from '../screens/OnboardScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FirstScreen from '../screens/FirstScreen';
import HomeScreen from '../screens/HomeScreen';
import MoreDetails from '../screens/MoreDetails';
import HeaderTab from '../components/HeaderTab';
import Firstscreen from '../screens/MoreDetailScreens/Firstscreen';
import Secondscreen from '../screens/MoreDetailScreens/Secondscreen';
import Thirdscreen from '../screens/MoreDetailScreens/Thirdscreen';
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
          <PrimaryNavigator.Screen
            name="SignInScreen"
            component={SignInScreen}
          />
          <PrimaryNavigator.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <PrimaryNavigator.Screen name="Firstscreen" component={Firstscreen} />
          <PrimaryNavigator.Screen
            name="Secondscreen"
            component={Secondscreen}
          />
          <PrimaryNavigator.Screen name="FirstScreen" component={FirstScreen} />
          <PrimaryNavigator.Screen name="HomeScreen" component={HomeScreen} />
          <PrimaryNavigator.Screen name="MoreDetails" component={MoreDetails} />
          <PrimaryNavigator.Screen name="HeaderTab" component={HeaderTab} />
          <PrimaryNavigator.Screen name="Thirdscreen" component={Thirdscreen} />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
