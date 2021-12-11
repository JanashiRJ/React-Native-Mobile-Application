import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FirstScreenHeadertab from '../components/FirstScreenHeadertab';
import ShopCategories from '../components/ShopCategories';

const SignInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#cdcfd1', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <FirstScreenHeadertab />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ShopCategories />
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignInScreen;
