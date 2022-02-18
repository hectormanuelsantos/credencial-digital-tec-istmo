import React, { useState } from 'react';
import { AzureInstance, AzureLoginView } from 'expo-react-native-azure-ad-2';
import UrlApi from '../api/UrlApi';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import UploadPhotoScreen from '../screens/UploadPhotoScreen';
import {getFoto} from '../api/ApiRequest';

const AuthSignIn = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [data, setData] = useState({
    officeLocation: '',
    displayName: '',
    givenName: '',
    surname: '',
    jobTitle: '',
    mail: '',
  });

  const credentials = {
    client_id: UrlApi.CLIENT_ID,
    client_secret: UrlApi.CLIENT_SECRET_KEY,
    redirect_uri: 'http://localhost:3000',
    scope: 'User.Read User.ReadBasic.All User.Read.All Mail.Read offline_access',
  };

  const azureInstance = new AzureInstance(credentials);

  const onLoginSuccess = async () => {
    try {
      const result = await azureInstance.getUserInfo();
      setLoginSuccess(true);
      setData({
        officeLocation: result.officeLocation,
        displayName: result.displayName,
        givenName: result.givenName,
        surname: result.surname,
        jobTitle: result.jobTitle,
        mail: result.mail,
      });

      // let cont = result.mail.slice(0, 8);
      // console.log(cont)
      // getFoto(cont)
      // .then(datos => {
      //   let ase = datos;
      //   console.log(ase)
      //   if (ase) {
      //         console.log('Imagen obtenida correctamente');
      //         // setTimeout(() => {
      //         //   redirect(ase);
      //         // }, 1000);
      //       } else {
      //         console.log('Algo salio mal, Intentelo mas tarde');
      //       }
      // });
      
    } catch (err) {
      console.error(err);
    }
  };

  if (!loginSuccess) {
    return <AzureLoginView azureInstance={azureInstance} loadingMessage={<AuthLoadingScreen />} onSuccess={onLoginSuccess} />;
  }
  /*   const ade = async () => {
    setPhotography(await apiGetFoto(control));
    if (photography) {
      console.log('de');
    } else {
      console.log('false');
    }
  };
  ade(); */
  return <UploadPhotoScreen data={data} />;
};

export default AuthSignIn;
