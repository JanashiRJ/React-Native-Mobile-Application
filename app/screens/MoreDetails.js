import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../components/Moredetails/Header';

export default function Moredetails() {
  return (
    <SafeAreaView style={{backgroundColor: '#cdcfd1', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

