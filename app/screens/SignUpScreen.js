import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SignUpScreen = () => {
  return (

<SafeAreaView style={{paddingHorizontal: 20, flex: 1, backgroundColor: '#fff'}}>
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flexDirection: 'row', marginTop: 40}}>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: '#000'}}>
        Best
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: '#64beff'}}>
        Choice
      </Text>
    </View>

    <View style={{marginTop: 45}}>
      <Text style={{fontSize: 27, fontWeight: 'bold', color: '#000'}}>
        Welcome Back,
      </Text>
      <Text style={{fontSize: 19, fontWeight: 'bold', color: '#a5a5a5'}}>
        Sign Up to continue
      </Text>
    </View>
  </ScrollView>
</SafeAreaView>;

export default SignUpScreen;
