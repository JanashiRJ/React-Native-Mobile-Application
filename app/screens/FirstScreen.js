import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FirstScreenHeadertab from '../components/FirstScreenHeadertab';
import ShopCategories from '../components/ShopCategories';

const FirstScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#cdcfd1', flex: 1}}>
      <View style={{backgroundColor: '#1A2641', padding: 15}}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <Text style={styles.Topicone}>Best</Text>
          <Text style={styles.Topictwo}>Choice</Text>
        </View>
        <View>
          <Text style={styles.Hometext}>
            We help you to find the best gift items for your loved ones..
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', padding: 14, marginTop: 10}}>
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
export default FirstScreen;

const styles = StyleSheet.create({
  Topicone: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'gray',
  },
  Topictwo: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#64beff',
  },
  Hometext: {
    marginTop: 25,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
