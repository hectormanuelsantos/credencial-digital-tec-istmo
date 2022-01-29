import React from 'react';
import { useFonts } from 'expo-font';

import MainStack from './src/navigation/MainStack';

const App = () => {
  const [loaded] = useFonts({
    LatoLight: require('./src/assets/fonts/LatoLight.ttf'),
    LatoRegular: require('./src/assets/fonts/LatoRegular.ttf'),
    LatoBold: require('./src/assets/fonts/LatoBold.ttf'),
    LatoBlack: require('./src/assets/fonts/LatoBlack.ttf'),
  });

  if (!loaded) return null;

  return <MainStack />;
};

export default App;
