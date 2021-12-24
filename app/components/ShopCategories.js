import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export const localInfo = [
  {
    name: 'Best Choice Mathara ',
    moredetails: 'Best Gift Collection',
    image_url:
      'https://redlinart.com/assets/uploads/page-headers/_hero/Web_Gift-Shop_699_409.jpg',
  },
  {
    name: 'Best Choice Kamburupitiya ',
    moredetails: 'Flower Collection',
    image_url:
      'https://thumbs.dreamstime.com/b/kuala-lumpur-malaysia-july-colorful-artificial-flowers-made-plastic-display-shops-sale-colorful-artificial-flowers-made-154614421.jpg',
  },
  {
    name: 'Best Choice Weligama',
    moredetails: 'Best Gift Collection ',
    image_url:
      'https://www.rockinghamcastle.com/wp-content/uploads/2014/06/1300711416.jpg',
  },
  {
    name: 'Best Choice Akuressa',
    moredetails: 'Best Gift Collection ',
    image_url:
      'http://www.designmuseum.me/wp-content/uploads/2014/03/Design_Store_Loxley_15.jpg',
  },
];

export default function ShopCategories() {
  return (
    <TouchableOpacity style={{marginBottom: 10}}>
      {localInfo.map((restaurant, index) => (
        <View
          key={index}
          style={{padding: 10, marginTop: 10, backgroundColor: 'white'}}>
          <ShopImages image={restaurant.image_url} />
          <ShopInfo
            name={restaurant.name}
            moredetails={restaurant.moredetails}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const ShopImages = props => (
  <>
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
  </>
);
const ShopInfo = props => (
  <View
    style={{
      marginTop: 10,
    }}>
    <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
      {props.name}
    </Text>
    <Text style={{fontSize: 14, color: 'black'}}>{props.moredetails}</Text>
  </View>
);
