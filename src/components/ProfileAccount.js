import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, BottomSheet, ListItem } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';

import ApiConfig from '../api/ApiConfig';
import { Api, username, password } from '../api/UrlApi';
import { loadImageFromGallery, askForPermission } from '../helpers/Permissions';
import { ButtonCamera, ButtonGallery, ButtonCancel } from './BottomSheet';

const ProfileAccount = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [photografy, setphotografy] = useState(null);

  const apiRequest = uri => {
    let numero = '19190780';
    let uriImage = uri;
    ApiConfig.post('auth/local', {
      identifier: username,
      password: password,
    })
      .then(res => {
        return res.data;
      })
      .then(user => {
        const formData = new FormData();
        formData.append(
          'data',
          JSON.stringify({
            ncontrol: numero,
          }),
        );
        let filename = numero + '-image.jpg';
        formData.append('files.Foto', {
          uri: uriImage,
          name: filename,
          type: 'image/jpeg',
        });

        if (user.jwt) {
          const response = fetch(`${Api}/credenciales`, {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          });
          const data = response.json();
          console.log('data', data);
        }
      });
  };

  const openImage = async () => {
    const result = await loadImageFromGallery([1, 1]);
    setphotografy(result);
    apiRequest(result.image);
  };

  const takeImage = async () => {
    const hasPermission = await askForPermission();
    if (!hasPermission) {
      return;
    } else {
      let image = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
        base64: true,
      });

      setphotografy({ localUri: image.uri });
      if (!image.cancelled) {
        apiRequest(image.uri);
      }
    }
  };

  const list = [
    {
      title: <ButtonCamera />,
      containerStyle: { backgroundColor: '#1b396a' },
      onPress: () => {
        takeImage();
        setIsVisible(false);
      },
    },
    {
      title: <ButtonGallery />,
      containerStyle: { backgroundColor: '#1b396a' },
      onPress: () => {
        openImage();
        setIsVisible(false);
      },
    },
    {
      title: <ButtonCancel />,
      containerStyle: { backgroundColor: '#dc3545' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View style={[styles.containerContent, styles.mb20]}>
      <View style={[styles.photoProfile, styles.mb20]}>
        <Avatar onPress={() => setIsVisible(true)} size={160} source={require('../assets/images/user.png')} />
        <BottomSheet modalProps={{}} isVisible={isVisible}>
          {list.map((l, i) => (
            <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
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
