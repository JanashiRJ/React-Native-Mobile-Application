import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

export default function HeaderTab() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#1A2641',
          height: 230,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View style={styles.header}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
                {' '}
                Hello{' '}
              </Text>
            </View>
            <Text style={{marginTop: 5, fontSize: 20, color: 'gray'}}>
              What do you want today
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
