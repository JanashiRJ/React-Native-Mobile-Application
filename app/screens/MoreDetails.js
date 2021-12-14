import React from 'react';
import {SafeAreaView, StyleSheet, Image, View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Moredetails/Header';


const Moredetails = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#f5f7f5', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Header />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <View style={style.imageBtn}>
              <Image
                style={style.imagestyle}
                source={require('../assets/Images/List/image4.jpg')}
              />
              <Text style={style.text}>Birth Day Parties</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.imageBtn}>
              <Image
                style={style.imagestyle}
                source={require('../assets/Images/List/image2.jpg')}
              />
              <Text style={style.text}>Mothers day or Teachers day</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
          <TouchableOpacity>
            <View style={style.imageBtn}>
              <Image
                style={style.imagestyle}
                source={require('../assets/Images/List/image3.jpg')}
              />
              <Text style={style.text}>Valentine days</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.imageBtn}>
              <Image
                style={style.imagestyle}
                source={require('../assets/Images/List/image1.jpg')}
              />
              <Text style={style.text}>Weddings or other special Parties</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  imageBtn: {
    height: 220,
    width: 150,
    marginHorizontal: 10,
    marginBottom: 2,
    marginTop: 20,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'white',
  },
  imagestyle: {
    height: 130,
    width: 140,
    borderRadius: 20,
    marginTop: 12,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginHorizontal: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Moredetails;
