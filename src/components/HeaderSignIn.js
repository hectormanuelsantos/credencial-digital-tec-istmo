import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HeaderSignIn = () => {
  return (
    <View style={styles.containerLogos}>
      <Image style={styles.logoTecnm} source={require('../assets/images/logo-tecnm-vertical.png')} resizeMode='contain' />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogos: {
    alignItems: 'center',
  },
  logoTecnm: {
    width: wp('40%'),
    height: hp('30%'),
  },
});

export default HeaderSignIn;
