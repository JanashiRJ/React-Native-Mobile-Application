import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView>
      <Image
        style={{width: '100%', height: 150}}
        source={require('../../assets/Images/GiftShop.jpg')}
      />
      <View
        style={{marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 18, color: '#3b3737'}}>
          Choose the Best Birth Day Gift Items  
        </Text>
      </View>
    </SafeAreaView>
  );
}