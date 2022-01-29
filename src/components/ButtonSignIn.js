import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ButtonSignIn = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textHelp}>Ingrese usando su cuenta en:</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('AuthSignIn')}
        style={styles.buttonMicrosoft}
        activeOpacity={0.85}
        underlayColor='#ffffff10'
      >
        <Image style={styles.imageMicrosoft} source={require('../assets/images/logo-microsoft.png')} resizeMode='contain' />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  textHelp: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'LatoBold',
    fontSize: hp('2%'),
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  buttonMicrosoft: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 6,
  },
  imageMicrosoft: {
    width: wp('30%'),
    height: hp('4%'),
  },
});

export default ButtonSignIn;