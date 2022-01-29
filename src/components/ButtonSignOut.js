import React, { useState } from 'react';
import RCTNetworking from 'react-native/Libraries/Network/RCTNetworking';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ButtonSignOut = ({ navigation }) => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const signOut = () => {
    Alert.alert('Cerrar Sesión', '¿Estas seguro que deseas cerrar tu sesión?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          RCTNetworking.clearCookies(() => {});
          setLoginSuccess(false);
          navigation.navigate('SignIn');
        },
      },
    ]);
  };

  return (
    <View style={styles.containerButton}>
      <TouchableHighlight style={styles.buttonSignOut} onPress={signOut} activeOpacity={0.85} underlayColor='#f47b20'>
        <Text style={styles.textButton}>Cerrar Sesión</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSignOut: {
    backgroundColor: '#ffffff',
    borderColor: '#f47b20',
    borderWidth: 2,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#000000',
    fontFamily: 'LatoBold',
    fontSize: hp('2.4%'),
    letterSpacing: 1,
  },
});

export default ButtonSignOut;
