import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView>
      <Image
        style={{width: '100%', height: 150}}
        source={require('../../assets/Images/GiftShop2.jpg')}
      />

      <View
        style={{marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 13, color: '#3b3737'}}>
          Choose the best Birth Day Gift Items for Birth Day Parties
        </Text>
        <Text> ⭐⭐⭐</Text>
      </View>
    </SafeAreaView>
  );
}