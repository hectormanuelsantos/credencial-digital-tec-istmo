import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BannerHome = () => {
  return (
    <View style={styles.containerBanner}>
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
  imageBanner: {
    width: wp('60%'),
    height: hp('15%'),
  },
});

export default BannerHome;
