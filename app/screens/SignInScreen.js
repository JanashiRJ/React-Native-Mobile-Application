import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSigning = async () => {
    if (!email || !password) {
      Alert.alert('please fil all the fields');
      return
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password)
      console.log(result.user)
      navigation.replace('FirstScreen')
    } catch (err) {
      Alert.alert('something went wrong please try different password');
    }
  };


  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: 'black'}}>
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
            <TextInput
              placeholder="Email"
              value={email}
              mode="outlined"
              style={styles.input}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              value={password}
              mode="outlined"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <TouchableOpacity mode="contained" onPress={() => userSigning()}>
            <View style={styles.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: '#a5a5a5', fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{color: '#ff2d5f', fontWeight: 'bold'}}>Sign up</Text>
          </TouchableOpacity>
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
  btnPrimary: {
    backgroundColor: '#28388f',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});







