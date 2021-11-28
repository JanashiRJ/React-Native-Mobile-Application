import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SignInScreen = () => {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: '#fff'}}>
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
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    marginTop: 20,
  },
  input: {
    color: 'white',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: '#a5a5a5',
    // eslint-disable-next-line no-dupe-keys
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
});
