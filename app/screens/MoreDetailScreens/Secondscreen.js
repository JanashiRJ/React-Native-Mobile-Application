import React from 'react';
import {SafeAreaView, View} from 'react-native';
import SecondscreenHeader from '../../components/Moredetails/SecondscreenHeader';

const Secondscreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <SecondscreenHeader />
      </View>
    </SafeAreaView>
  );
};

export default Secondscreen;
