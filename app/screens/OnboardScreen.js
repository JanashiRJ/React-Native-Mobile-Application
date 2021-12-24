import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

class OnboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressProfileButton = () => {
    this.props.navigation.navigate('SignInScreen');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          style={styles.image}
          source={require('../assets/Images/Logo.jpg')}
        />
        <View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.buttoncontainer}>
              <TouchableOpacity onPress={this.onPressProfileButton}>
                <View style={styles.button}>
                  <Text style={styles.buttontext}> Get Started </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default OnboardScreen;

const styles = StyleSheet.create({
  textcontainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  button: {
    width: 180,
    height: 65,
    borderRadius: 75,
    backgroundColor: '#1A2641',
    marginTop: 110,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    letterSpacing: -0.39,
    opacity: 20,
    marginTop: 15,
  },
  image:{
    width: 410,
    height: 520,
  },
});
