import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const {items, title} = useSelector(state => state.cartReducer.selectedItems);
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const styles = StyleSheet.create({
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },

    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
      color: 'black',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },

    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    Titlename: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    usd: {
      color: 'black',
    },
  });

  const checkoutModalcontent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.Titlename}>{title}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}> SubTotal</Text>
              <Text style={styles.usd}>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                }}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: 'white', fontSize: 18}}> CheckOut </Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  marginTop: 180,
                  margin: 10,
                  fontWeight:'bold',
                }}>
                Oder Completed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalcontent()}
      </Modal>
      {total ? (
        <View
          style={{
            justifyContent: 'center',
            bottom: -1,
            zIndex: 999,
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                padding: 13,
                borderRadius: 30,
                width: 200,
                position: 'relative',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                marginTop: 30,
                backgroundColor: 'black',
                alignItems: 'center',
                marginLeft: 80,
              }}
              onPress={() => setModalVisible(true)}>
              <Text style={{color: 'white', fontSize: 20, marginRight: 80}}>
                ViewCart
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  top: 17,
                  position: 'absolute',
                  right: 20,
                }}>
                {' '}
                RS:
                {total ? totalUSD : ''}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
