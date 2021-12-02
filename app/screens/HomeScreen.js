/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import category from '../constants/Categories';
import HeaderTab from '../components/HeaderTab';

const items = [
  {
    image: require('../assets/Images/Categories/Teddy.png'),
    name: 'TEDDY',
  },
  {
    image: require('../assets/Images/Categories/chocolate.png'),
    name: 'CHOCOLATE',
  },
  {
    image: require('../assets/Images/Categories/Flower.jpg'),
    name: 'FLOWER',
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

const Card = ({cat}) => {
  return (
    <View style={style.menuItemStyle}>
      <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={style.titleStyle}>{cat.name}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          {cat.Price}{' '}
        </Text>
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [filteredcats, setfilteredcats] = React.useState([]);

  const filtercat = index => {
    const currentcats = category.filter(
      item => item?.cat?.toUpperCase() == items[index].name,
    )[0]?.cats;
    setfilteredcats(currentcats);
  };

  React.useEffect(() => {
    filtercat(0);
  }, []);

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
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategoryIndex(index);
                  filtercat(index);
                }}
                style={[
                  style.categoryBtn,
                  {
                    backgroundColor:
                      selectedCategoryIndex == index ? 'gray' : '#fff',
                  },
                ]}>
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <HeaderTab />
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredcats}
        renderItem={({item}) => <Card cat={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputcontainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#dce0dd',
    opacity: 25,
  },
  image: {
    marginLeft: 10,
    marginTop: 10,
  },
  imagesort: {
    marginLeft: 2,
    marginTop: 6,
  },
  imageadd: {
    width: 15,
    height: 15,
  },
  text: {
    color: 'black',
    fontSize: 12,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 4,
    backgroundColor: '#fa7075',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  catagoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
  },
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 40,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  image1: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  card: {
    height: 100,
    width: 345,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'white',
  },
  addcardbutton: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#ed5151',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 80,
  },
});

export default HomeScreen;
