import React from 'react';
import { useFonts } from 'expo-font';
import { ToastProvider } from 'react-native-toast-notifications';

import MainStack from './src/navigation/MainStack';

const App = () => {
  const [loaded] = useFonts({
    LatoRegular: require('./src/assets/fonts/LatoRegular.ttf'),
    LatoBold: require('./src/assets/fonts/LatoBold.ttf'),
    LatoBlack: require('./src/assets/fonts/LatoBlack.ttf'),
  });

  if (!loaded) return null;

  return (
    <ToastProvider>
      <MainStack />
    </ToastProvider>
  );
};

export default App;
