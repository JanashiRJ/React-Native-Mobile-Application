import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';


class OnboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressProfileButton = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <View>
            <Text style={styles.HomeTopic}>Best Choice</Text>
          </View>
          <View>
            <Text style={styles.Hometext}>
              We help you to find the best gift items for your loved ones..
            </Text>
          </View>
          <View style={styles.indicatorcontainer}>
            <View style={styles.Currentindicator} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>
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
  HomeTopic: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
  },
  Hometext: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  indicatorcontainer: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  Currentindicator: {
    height: 13,
    width: 30,
    backgroundColor: '#1A2641',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    backgroundColor: 'gray',
    borderRadius: 6,
    marginHorizontal: 5,
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
    marginTop: 20,
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
});
