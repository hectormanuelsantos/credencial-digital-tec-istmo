import React, { useEffect, useRef } from 'react';

import { Animated, Text, View } from 'react-native';

const Message = props => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(3000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
          marginLeft: 'auto',
          marginRight: 'auto',
          margin: 10,
          marginBottom: 5,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 4,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 6,
        }}
      >
        <Text>{props.message}</Text>
      </Animated.View>
    </View>
  );
};

export default () => {
  return <Message message='Subiendo Foto' />;
};
