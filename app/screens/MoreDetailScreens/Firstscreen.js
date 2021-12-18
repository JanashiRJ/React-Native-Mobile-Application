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
import FirstscreenHeader from '../../components/Moredetails/FirstscreenHeader';

const items = [
  {
    image:
      'https://i.pinimg.com/originals/10/4c/f0/104cf0cd4dba66622a22ce0e6c8f6d1b.jpg',
    name: 'FLOWER',
  },
  {
    image: require('../../assets/Images/Flowers/image2.jpg'),
    name: 'TEDDY',
  },
  {
    image: require('../../assets/Images/Flowers/image3.jpg'),
    name: 'WOODEN',
  },
];

const Card = ({items}) => {
  return (
    <View style={style.menuItemStyle}>
      <BouncyCheckbox
        iconStyle={{borderColor: 'gray', borderRadius: 0, margin:10}}
        fillColor="#5f6885"
      />
      <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={style.titleStyle}>{items.name}</Text>
      </View>
      <View>
        <Image
          source={items.image}
          style={{
            height: 100,
            width: 100,
            borderRadius: 40,
            marginLeft: -100,
          }}></Image>
      </View>
    </View>
  );
};

const Firstscreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#f5f7f5', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <FirstscreenHeader />
      </View>
      <FlatList data={items} renderItem={({item}) => <Card items={item} />} />
    </SafeAreaView>
  );
};
export default Firstscreen;

const style = StyleSheet.create({
  cardDetailsContainer: {
    height: 100,
    backgroundColor: '#ffff',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 130,
    backgroundColor: '#ffff',
    borderRadius: 20,
    marginRight: 50,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
