import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ThirdscreenHeader from '../../components/Moredetails/ThirdscreenHeader';

const items = [
  {
    image: require('../../assets/Images/Screen3/image1.jpg'),
    name: '3D Crystal engraving roses Lamp',
    price: 'Rs 1500',
  },
  {
    image: require('../../assets/Images/Screen3/image2.jpg'),
    name: '3D Visual Optical Illusion Colorful Lamp',
    price: 'Rs 1750',
  },
  {
    image: require('../../assets/Images/Screen3/image3.jpg'),
    name: 'Exotic Red Roses Arrangement',
    price: 'Rs 1900',
  },
  {
    image: require('../../assets/Images/Screen3/image4.jpg'),
    name: 'Unique Personalized Table Clock',
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
          source={items.image}
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

const Thirdscreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <ThirdscreenHeader />
      </View>
      <FlatList data={items} renderItem={({item}) => <Card items={item} />} />
    </SafeAreaView>
  );
};
export default Thirdscreen;

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

