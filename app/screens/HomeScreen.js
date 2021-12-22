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
  TextInput,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import category from '../constants/Categories';
import HeaderTab from '../components/HeaderTab';
import ViewCart from '../components/ViewCart';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const items = [
  {
    image: require('../assets/Images/Categories/Flower.jpg'),
    name: 'FLOWER',
  },
  {
    image: require('../assets/Images/Categories/Teddy.png'),
    name: 'TEDDY',
  },
  {
    image: require('../assets/Images/Categories/Wooden.png'),
    name: 'WOODEN',
  },
  {
    image: require('../assets/Images/Categories/Wall.png'),
    name: 'WALL DECORATIONS',
  },
  {
    image: require('../assets/Images/Categories/chocolate.png'),
    name: 'CHOCOLATE',
  },
];


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

  const Card = ({cat}) => {
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) =>
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...item,
          checkboxValue: checkboxValue,
        },
      });

    const cartItems = useSelector(
      state => state.cartReducer.selectedItems.items,
    );

    const isItemInCart = (cat, cartItems) =>
      Boolean(cartItems.find(item => item.title === cat.title));
    return (
      <View style={style.menuItemStyle}>
        <BouncyCheckbox
          iconStyle={{borderColor: 'gray', borderRadius: 0}}
          fillColor="#5f6885"
          isChecked={isItemInCart(cat, cartItems)}
          onPress={checkboxValue => selectItem(cat, checkboxValue)}
        />

        <View style={{width: 240, justifyContent: 'space-evenly'}}>
          <Text style={style.titleStyle}>{cat.title}</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Rs.{cat.price}{' '}
          </Text>
        </View>
        <View>
          <Image
            source={cat.image}
            style={{height: 100, width: 100, borderRadius: 40}}></Image>
        </View>
      </View>
    );
  };
  const ListCategories = () => {
    return (
      <View
        style={{
          marginTop: -150,
          paddingVertical: 10,
          paddingLeft: 20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View
              key={'cat' + index}
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
        <View
          style={{marginTop: 120, flexDirection: 'row', paddingHorizontal: 20}}>
          <View style={style.inputcontainer}>
            <Image
              style={style.image}
              source={require('../assets/Images/search.png')}
            />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="search for Items"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
            <View style={style.sortBtn}>
              <Image
                style={style.imagesort}
                source={require('../assets/Images/sort.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 210}}>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredcats}
        renderItem={({item}) => <Card cat={item} navigation={navigation} />}
      />
      <ViewCart />
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
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 12,
  },
  catagoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    marginTop: -10,
    backgroundColor: 'white',
    height: 120,
  },
  categoryBtn: {
    height: 55,
    width: 70,
    marginRight: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#5f6885',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 80,
  },
});

export default HomeScreen;
