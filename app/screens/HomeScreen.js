import React from 'react';
import {View, SafeAreaView} from 'react-native';
import HeaderTab from '../components/HeaderTab';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderTab />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
