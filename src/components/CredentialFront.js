import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { apiGetFoto } from '../api/ApiRequest';

const CredentialFront = ({ data }) => {
  const [photografy, setphotografy] = useState(null);

  let ncontrol = data.mail.slice(0, 8);

  apiGetFoto(ncontrol, setphotografy);

  return (
    <View style={styles.containerCredentialFront}>
      <View style={[styles.containerLogo, styles.mb25]}>
        <Image style={styles.logoTecNM} source={require('../assets/images/logo-tecnm.png')} resizeMode='contain' />
      </View>
      <View style={[styles.containerProfile, styles.mb25]}>
        <Image style={styles.photo} source={{ uri: photografy }} />
      </View>
      <View>
        <Text style={[styles.name, styles.mb25]}>{data.displayName}</Text>
        <Text style={styles.title}>Número de Control</Text>
        <Text style={[styles.subtitle, styles.mb25]}>{data.mail.slice(0, 8)}</Text>
        <Text style={styles.rolUser}>{data.jobTitle.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCredentialFront: {
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
  containerLogo: {
    alignItems: 'center',
  },
  logoTecNM: {
    width: wp('40%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
  containerProfile: {
    alignItems: 'center',
  },
  photo: {
    width: wp('35%'),
    height: hp('20%'),
  },
  containerName: {
    width: 180,
    marginRight: 10,
  },
  name: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3%'),
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 30,
    marginBottom: 10,
  },
  title: {
    color: '#ffffff80',
    fontFamily: 'LatoBold',
    fontSize: hp('2.2%'),
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    fontSize: hp('2.2%'),
    textAlign: 'center',
  },
  rolUser: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3.6%'),
    textAlign: 'center',
    letterSpacing: 1,
  },
  mb25: {
    marginBottom: 25,
  },
});

export default CredentialFront;
