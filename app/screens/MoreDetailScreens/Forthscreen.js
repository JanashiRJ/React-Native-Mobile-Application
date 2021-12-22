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
import ForthscreenHeader from '../../components/Moredetails/ForthscreenHeader';

const items = [
  {
    image_url: require('../../assets/Images/Screen4/image1.jpg'),
    name: '  3D LED Love Heart Anniversary Lamp',
    price: 'Rs 1100',
  },
  {
    image_url: require('../../assets/Images/Screen4/image2.jpg'),
    name: 'Anniversary Frame for Parents',
    price: 'Rs 950',
  },
  {
    image_url: require('../../assets/Images/Screen4/image3.jpg'),
    name: ' Marriage gift items',
    price: 'Rs 1400',
  },
  {
    image_url: require('../../assets/Images/Screen4/image4.jpg'),
    name: 'Marriage gift items',
    price: 'Rs 1300',
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

const Forthscreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <ForthscreenHeader />
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

export default Forthscreen;

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


