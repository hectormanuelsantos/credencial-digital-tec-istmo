import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomSheet, ListItem } from 'react-native-elements';
import { launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderUploadPhotography from '../components/HeaderUploadPhotography';
import InstructionsPhoto from '../components/InstructionsPhoto';
import { loadImageFromGallery, askForPermission } from '../helpers/Permissions';
import { ButtonCamera, ButtonGallery, ButtonCancel } from '../components/BottomSheet';
import { postCredencial } from '../api/ApiRequest';
import UrlApi from '../api/UrlApi';

const UploadPhotoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { officeLocation, givenName, surname, displayName, jobTitle, mail, photo } = route.params;

  let data = {
    officeLocation,
    givenName,
    surname,
    displayName,
    jobTitle,
    mail,
    photo,
  };

  const [isVisible, setIsVisible] = useState(false);

  let cadena = data.surname;
  let indice = cadena.indexOf(' ');
  let cadena2 = cadena.substring(indice);

  let almControl = data.mail.slice(0, 8);
  let almCurp = data.officeLocation;
  let almEmail = data.mail;
  let almName = data.givenName;
  let almFname = cadena.substring(0, indice);
  let almSname = cadena2.substring(1);

  const openImage = async () => {
    const resultado = await loadImageFromGallery([1, 1]);

    if (!resultado.image.cancelled) {
      postCredencial(resultado.image, almCurp, almEmail, almName, almFname, almSname, almControl).then(datos => {
        let ase = `${UrlApi.API}${datos.photography.url}`;
        if (ase) {
          console.log('Imagen obtenida correctamente');
          setTimeout(() => {
            redirect(ase);
          }, 1000);
        } else {
          console.log('Algo salio mal, Intentelo mas tarde');
        }
      });
    }
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

      if (!image.cancelled) {
        postCredencial(image.uri, almCurp, almEmail, almName, almFname, almSname, almControl).then(datos => {
          let ase = `${UrlApi.API}${datos.photography.url}`;
          if (ase) {
            console.log('Imagen obtenida correctamente');
            setTimeout(() => {
              redirect(ase);
            }, 1000);
          } else {
            console.log('Algo salio mal, Intentelo mas tarde');
          }
        });
      }
    }
  };

  const redirect = foto => {
    navigation.replace('BottomNavigation', {
      displayName: data.displayName,
      jobTitle: data.jobTitle,
      mail: data.mail,
      photo: foto,
    });
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
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <HeaderUploadPhotography />
      <InstructionsPhoto />
      <TouchableHighlight onPress={() => setIsVisible(true)} style={styles.buttonUpload} activeOpacity={0.85} underlayColor='#1b396a90'>
        <MaterialIcons name='file-upload' size={hp('5%')} color='#ffffff' />
      </TouchableHighlight>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
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
