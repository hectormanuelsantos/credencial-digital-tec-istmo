import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { vigency } from '../helpers/GetVigencyCredential';

const CredentialBack = () => {
  return (
    <View style={styles.containerCredentialBack}>
      <View style={[styles.containerLogoEducacion, styles.mb30]}>
        <Image style={styles.logoEducacion} source={require('../assets/images/logo-educacion.png')} resizeMode='contain' />
      </View>
      <View style={[styles.containerCampus, styles.mb30]}>
        <Image style={styles.logoIti} source={require('../assets/images/logo-iti.png')} resizeMode='contain' />
        <Text style={styles.nameCampus}>IT Istmo</Text>
      </View>
      <View>
        <Text style={styles.title}>Vigencia</Text>
        <Text style={styles.vigencia}>{vigency}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCredentialBack: {
    backgroundColor: '#1b396a',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 25,
    width: 350,
    maxWidth: wp('90%'),
    height: 'auto',
    height: 520,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('5%'),
  },
  containerLogoEducacion: {
    alignItems: 'center',
  },
  logoEducacion: {
    width: wp('50%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
  containerCampus: {
    alignItems: 'center',
  },
  logoIti: {
    width: wp('15%'),
    height: hp('8%'),
    resizeMode: 'contain',
    marginBottom: 20,
  },
  nameCampus: {
    color: '#ffffff',
    fontFamily: 'LatoBold',
    fontSize: hp('3%'),
    letterSpacing: 1,
    textAlign: 'center',
  },
  title: {
    color: '#ffffff80',
    fontFamily: 'LatoBold',
    fontSize: hp('2.2%'),
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 15,
  },
  vigencia: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3.8%'),
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  mb30: {
    marginBottom: 30,
  },
});

export default CredentialBack;
