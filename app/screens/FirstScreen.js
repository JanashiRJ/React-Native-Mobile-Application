import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FirstScreenHeadertab from '../components/FirstScreenHeadertab';
import ShopCategories from '../components/ShopCategories';

export default function FirstScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#cdcfd1', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <FirstScreenHeadertab />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ShopCategories />
      </ScrollView>
    </SafeAreaView>
  );
}
