import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const OrderCompleted = ({navigation}) => {
  const {items} = useSelector(state => state.cartReducer.selectedItems);
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <SafeAreaView style={{backgroundColor: '#A2A7F6'}}>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/Images/Icon/carticon.png')}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            margin: 20,
            marginTop: -50,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Thank you for your order for RS :{totalUSD}
        </Text>
      </View>
      <View>
        <Image
          style={styles.image1}
          source={require('../assets/Images/Icon/shoping.png')}
        />
      </View>
      <View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={StyleSheet.buttoncontainer}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <View style={styles.button}>
                <Text style={styles.buttontext}> Home </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: 120,
    margin: 150,
  },
  image1: {
    width: 150,
    height: 150,
    marginTop: 80,
    margin: 150,
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: 120,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#b8afae',
    marginTop: 2,
  },
  buttontext: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    letterSpacing: -0.39,
    opacity: 20,
    marginTop: 1,
  },
});
