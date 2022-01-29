import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeHome = () => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={[styles.textWelcome, styles.mb50]}>Bienvenid@ a la Credencial Digital del TecNM Campus Istmo</Text>
      <Text style={[styles.rolUser, styles.mb50]}>Alumno</Text>
      <Text style={styles.nameUser}>Angel Arturo Morales Rodriguez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWelcome: {
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('10%'),
  },
  textWelcome: {
    color: '#000000',
    fontFamily: 'LatoBold',
    fontSize: hp('2.4%'),
    textAlign: 'center',
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  rolUser: {
    color: '#000000',
    fontFamily: 'LatoBlack',
    fontSize: hp('2.4%'),
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  nameUser: {
    fontFamily: 'LatoBold',
    fontSize: hp('2.6%'),
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 1,
  },
  mb50: {
    marginBottom: 50,
  },
});

export default WelcomeHome;
