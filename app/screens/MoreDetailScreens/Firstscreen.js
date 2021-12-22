import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import FirstscreenHeader from '../../components/Moredetails/FirstscreenHeader';

const items = [
  {
    image: require('../../assets/Images/Screen1/image1.jpg'),
    name: 'LED night lamp',
    price: 'Rs 2500',
  },
  {
    image: require('../../assets/Images/Screen1/image2.jpg'),
    name: 'Gift Box for mens',
    price: 'Rs 4500',
  },
  {
    image: require('../../assets/Images/Screen1/image3.jpg'),
    name: 'Women Watches',
    price: 'Rs 2600',
  },
  {
    image: require('../../assets/Images/Screen1/image4.jpg'),
    name: 'Birthday-photo-clock',
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

const Firstscreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <FirstscreenHeader />
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
export default Firstscreen;

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
