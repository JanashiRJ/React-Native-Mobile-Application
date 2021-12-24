import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView>
      <Image
        style={{width: '100%', height: 200}}
        source={require('../../assets/Images/GiftShop.jpg')}
      />
      <View
        style={{marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 16, color: '#3b3737'}}>
          Choose the best gift items for your needs
        </Text>
        <Text> ⭐⭐⭐</Text>
      </View>
    </SafeAreaView>
  );
}
