import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const AddDetailsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#8f9bb8'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#1A2641',
            height: 230,
            width: 1000,
          }}>
          <Image
            style={styles.image}
            source={require('../assets/Images/Icon/usericon.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Address" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="City" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Phone Number" style={styles.input} />
          </View>
          <TouchableOpacity>
            <View style={styles.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Add Details
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDetailsScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    color: 'black',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: '#838487',
    // eslint-disable-next-line no-dupe-keys
    borderBottomWidth: 0.8,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    backgroundColor: '#1A2641',
    height: 50,
    width: 300,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    margin: 60,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 60,
    margin: 160,
  },
});
