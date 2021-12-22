import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function OrderItem({item}) {
  const {title, price} = item;
  return (
    <>
      <SafeAreaView>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 12,
            color: 'blue',
          }}>
          {' '}
          Item Selected
        </Text>
      </SafeAreaView>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#999',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
            {title}
          </Text>
          <Text
            style={{
              opacity: 0.7,
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              marginRight: 5,
            }}>
            {price}
          </Text>
        </View>
      </View>
    </>
  );
}
