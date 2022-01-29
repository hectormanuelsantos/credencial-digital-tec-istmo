import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HeaderSignIn = () => {
  return (
    <View style={styles.containerLogos}>
      <Image style={styles.logoTecnm} source={require('../assets/images/logo-tecnm.png')} resizeMode='contain' />
      <Image style={styles.logoIti} source={require('../assets/images/logo-iti.png')} resizeMode='contain' />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoTecnm: {
    width: wp('40%'),
    height: hp('10%'),
  },
  logoIti: {
    width: wp('15%'),
    height: hp('10%'),
  },
});

export default HeaderSignIn;
