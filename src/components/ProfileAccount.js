import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Avatar, BottomSheet, ListItem } from 'react-native-elements';
// import { launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { loadImageFromGallery, askForPermission } from '../helpers/Permissions';
import { apiPostFoto, apiGetFoto } from '../api/ApiRequest';
// import { ButtonCamera, ButtonGallery, ButtonCancel } from './BottomSheet';

const ProfileAccount = ({ data }) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [photografy, setphotografy] = useState(null);

  let ncontrol = data.mail.slice(0, 8);
  apiGetFoto(ncontrol, setphotografy);

  const onRefresh = () => {
    toast.show('Subiendo foto...', 5000);
    setTimeout(() => {
      apiGetFoto(ncontrol, setphotografy);
    }, 5000);
  };

  const disabledBottomShet = () => (!photografy ? setIsVisible(true) : setIsVisible(false));

  // const openImage = async () => {
  //   const result = await loadImageFromGallery([1, 1]);

  //   if (!result.image.cancelled) {
  //     apiPostFoto(result.image, ncontrol);
  //     onRefresh();
  //   }
  // };

  // const takeImage = async () => {
  //   const hasPermission = await askForPermission();
  //   if (!hasPermission) {
  //     return;
  //   } else {
  //     let image = await launchCameraAsync({
  //       mediaTypes: MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [3, 3],
  //       quality: 1,
  //       base64: true,
  //     });
  //     if (!image.cancelled) {
  //       apiPostFoto(image.uri, ncontrol);
  //       onRefresh();
  //     }
  //   }
  // };

  // const list = [
  //   {
  //     title: <ButtonCamera />,
  //     containerStyle: { backgroundColor: '#1b396a' },
  //     onPress: () => {
  //       takeImage();
  //       setIsVisible(false);
  //     },
  //   },
  //   {
  //     title: <ButtonGallery />,
  //     containerStyle: { backgroundColor: '#1b396a' },
  //     onPress: () => {
  //       openImage();
  //       setIsVisible(false);
  //     },
  //   },
  //   {
  //     title: <ButtonCancel />,
  //     containerStyle: { backgroundColor: '#dc3545' },
  //     onPress: () => setIsVisible(false),
  //   },
  // ];

  return (
    <ScrollView style={styles.containerContent}>
      <View style={styles.photoProfile}>
        <Avatar
          rounded
          size={160}
          source={photografy ? { uri: photografy } : require('../assets/images/user.png')}
        />
        {/* <BottomSheet modalProps={{}} isVisible={isVisible}>
          {list.map((l, i) => (
            <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet> */}
      </View>
      <View>
        <Text style={styles.title}>Nombre Completo</Text>
        <Text style={[styles.subtitle, styles.mb5]}>{data.displayName}</Text>
      </View>
      <View>
        <Text style={styles.title}>Correo Electrónico</Text>
        <Text style={styles.subtitle}>{data.mail}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    backgroundColor: '#1b396a',
    borderRadius: 8,
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('5%'),
    marginBottom: wp('10%'),
    padding: wp('5%'),
  },
  photoProfile: {
    alignItems: 'center',
    marginBottom: wp('10%'),
  },
  title: {
    color: '#f47b20',
    fontFamily: 'LatoBold',
    fontSize: hp('2.6%'),
    marginBottom: 5,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    fontSize: hp('2.4%'),
    letterSpacing: 0.5,
  },
  mb5: {
    marginBottom: wp('5%'),
  },
});

export default ProfileAccount;
