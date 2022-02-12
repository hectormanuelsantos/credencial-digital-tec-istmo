import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderUploadPhotography from '../components/HeaderUploadPhotography';
import InstructionsPhoto from '../components/InstructionsPhoto';

const UploadPhotoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <HeaderUploadPhotography />
      <InstructionsPhoto />
      <TouchableHighlight onPress={() => alert('Pressed!')} style={styles.buttonUpload} activeOpacity={0.85} underlayColor='#1b396a90'>
        <MaterialIcons name='file-upload' size={hp('5%')} color='#ffffff' />
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonUpload: {
    backgroundColor: '#1b396a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: wp('90%'),
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default UploadPhotoScreen;
