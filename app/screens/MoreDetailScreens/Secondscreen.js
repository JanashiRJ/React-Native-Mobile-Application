import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import SecondscreenHeader from '../../components/Moredetails/SecondscreenHeader';

const items = [
  {
    image_url: require('../../assets/Images/Screen2/image1.jpg'),
    name: 'Jade Apple Teacher Award Plaque',
    price: 'Rs 1500',
  },
  {
    image_url: require('../../assets/Images/Screen2/image2.jpg'),
    name: 'Teacher Retirement Award Rectangular Crystal Plaque ',
    price: 'Rs 850',
  },
  {
    image_url: require('../../assets/Images/Screen2/image3.jpg'),
    name: ' Mothers Day gifts',
    price: 'Rs 900',
  },
  {
    image_url: require('../../assets/Images/Screen2/image4.jpg'),
    name: '3D Night Light',
    price: 'Rs 1600',
  },
];

const Card = ({items}) => {
  return (
    <View style={style.menuItemStyle}>
      <BouncyCheckbox
        iconStyle={{borderColor: 'gray', borderRadius: 0}}
        fillColor="#5f6885"
      />
      <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={style.titleStyle}>{items.name}</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            margin: 10,
            marginTop: -20,
          }}>
          {items.price}{' '}
        </Text>
      </View>
      <View>
        <Image
          source={items.image_url}
          style={{
            height: 100,
            width: 100,
            borderRadius: 18,
            marginLeft: -35,
            marginTop: 20,
          }}></Image>
      </View>
    </View>
  );
};

const Secondscreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <SecondscreenHeader />
      </View>
      <FlatList data={items} renderItem={({item}) => <Card items={item} />} />
      <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
        <Image
          style={{width: 35, height: 35, resizeMode: 'contain', marginLeft: 15}}
          source={require('../../assets/Images/Icon/arrow.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Secondscreen;

const style = StyleSheet.create({
  cardDetailsContainer: {
    height: 50,
    backgroundColor: 'red',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 100,
    width: 130,
    backgroundColor: '#ffff',
    borderRadius: 20,
    marginRight: -50,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 20,
    backgroundColor: 'white',
    height: 120,
  },
});


