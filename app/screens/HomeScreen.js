import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderTab from '../components/HeaderTab';

const items = [
  {
    image: require('../assets/Images/Categories/Teddy.png'),
    name: 'TEDDY',
  },
  {
    image: require('../assets/Images/Categories/Flower.jpg'),
    name: 'FLOWER',
  },
  {
    image: require('../assets/Images/Categories/chocolate.png'),
    name: 'CHOCOLATE',
  },
  {
    image: require('../assets/Images/Categories/Wooden.png'),
    name: 'WOODEN',
  },
  {
    image: require('../assets/Images/Categories/Wall.png'),
    name: 'WALL DECORATIONS',
  },
];

const ListCategories = () => {
  return (
    <View
      style={{
        marginTop: 15,
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={'pet' + index}
            style={{alignItems: 'center', marginRight: 30}}>
            <TouchableOpacity>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: 'contain',
                  borderRadius: 60,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View>
          <HeaderTab />
        </View>
      </View>
      <View style={{marginTop: 180}}>
        <ListCategories />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
