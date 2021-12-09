import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';

export default function HeaderTab() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#1A2641',
          height: 220,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          paddingHorizontal: 20,
        }}>
        <View style={styles.header}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
                {' '}
                Hello{' '}
              </Text>
            </View>
            <Text style={{marginTop: 5, fontSize: 20, color: 'gray'}}>
              What do you want today
            </Text>
          </View>
        </View>
        <View
          style={{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20}}>
          <View style={styles.inputcontainer}>
            <Image
              style={styles.image}
              source={require('../assets/Images/search.png')}
            />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="search for Items"
            />
          </View>
          <View style={styles.sortBtn}>
            <Image
              style={styles.imagesort}
              source={require('../assets/Images/sort.png')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});
