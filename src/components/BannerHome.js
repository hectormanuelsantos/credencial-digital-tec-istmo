import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BannerHome = () => {
  return (
    <View style={styles.containerBanner}>
      <Text style={styles.textBanner}>Credencial Digital TecNM</Text>
      <Image style={styles.imageBanner} source={require('../assets/images/logo-tecnm.png')} resizeMode='contain' />
    </View>
  );
};

const styles = StyleSheet.create({
  containerBanner: {
    backgroundColor: '#1b396a',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('30%'),
    width: wp('100%'),
  },
  textBanner: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('2.6%'),
    letterSpacing: 1,
    marginBottom: 20,
  },
  imageBanner: {
    width: wp('40%'),
    height: hp('10%'),
  },
});

export default BannerHome;
