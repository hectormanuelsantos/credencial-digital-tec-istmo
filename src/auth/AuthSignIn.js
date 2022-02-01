import React, { useState } from 'react';
import { AzureInstance, AzureLoginView } from 'expo-react-native-azure-ad-2';
import { CLIENT_ID, CLIENT_SECRET_KEY } from '@env';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import BottomNavigation from '../navigation/BottomNavigation';

const AuthSignIn = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [azureLoginObject, setAzureLoginObject] = useState({});

  const credentials = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET_KEY,
    redirect_uri: 'http://localhost:3000',
    scope: 'User.Read openid',
  };

  const azureInstance = new AzureInstance(credentials);

  const onLoginSuccess = async () => {
    try {
      const result = await azureInstance.getUserInfo();
      setLoginSuccess(true);
      setAzureLoginObject(result);
    } catch (err) {
      console.error(err);
    }
  };

  if (!loginSuccess) {
    return <AzureLoginView azureInstance={azureInstance} loadingMessage={<AuthLoadingScreen />} onSuccess={onLoginSuccess} />;
  }
  /* console.log(azureLoginObject); */
  return <BottomNavigation />;
};

export default AuthSignIn;
