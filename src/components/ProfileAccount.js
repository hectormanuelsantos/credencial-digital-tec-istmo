import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileAccount = () => {
  return (
    <View style={[styles.containerContent, styles.mb20]}>
      <View style={[styles.photoProfile, styles.mb20]}>
        <Avatar size={160} source={require('../assets/images/user.png')} />
      </View>
      <View>
        <Text style={styles.title}>Nombre Completo</Text>
        <Text style={[styles.subtitle, styles.mb20]}>Angel Arturo Morales Rodriguez</Text>
      </View>
      <View>
        <Text style={styles.title}>Correo Electrónico</Text>
        <Text style={styles.subtitle}>18190683@istmo.tecnm.mx</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    backgroundColor: '#1b396a',
    borderRadius: 8,
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    padding: 20,
  },
  photoProfile: {
    alignItems: 'center',
  },
  title: {
    color: '#f47b20',
    fontFamily: 'LatoBold',
    fontSize: hp('2.4%'),
    marginBottom: 5,
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    fontSize: hp('2.2%'),
    letterSpacing: 0.5,
  },
  mb20: {
    marginBottom: 20,
  },
});

export default ProfileAccount;
