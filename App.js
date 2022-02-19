import React from 'react';
import { useFonts } from 'expo-font';
import { ToastProvider } from 'react-native-toast-notifications';
import * as Sentry from 'sentry-expo';

import MainStack from './src/navigation/MainStack';

Sentry.init({
  dsn: 'https://e2fb5ade8eab4f14bcfb2e78030728ee@o1145928.ingest.sentry.io/6214090',
  enableInExpoDevelopment: true,
  debug: true,
});

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
