import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CredentialBack = () => {
  return <View style={styles.containerCredentialBack}></View>;
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
});

export default CredentialBack;
