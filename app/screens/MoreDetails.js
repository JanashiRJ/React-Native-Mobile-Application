import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import Header from '../components/Moredetails/Header';
import category from '../constants/OccationList';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Card = ({category}) => {
  return (
    <View style={style.card}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={category.image}
          style={{height: 100, width: 100, borderRadius: 40}}
        />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          {category.title}
        </Text>
      </View>
    </View>
  );
};

export default function Moredetails() {
  return (
    <SafeAreaView style={{backgroundColor: '#edf0ee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Header />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={category}
        renderItem={({item}) => <Card category={item} />}
      />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 2,
    marginTop: 20,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'white',
  },
});
