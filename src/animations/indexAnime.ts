import {Animated, Easing} from 'react-native';

const opacityAnim = new Animated.Value(0);
const transformYAnim = new Animated.Value(30);
const opacityGradient = new Animated.Value(0);
const gradientScale = new Animated.Value(1);
const blackCoverOpacity = new Animated.Value(1);

export const splashScreenAnimes = () => {
  Animated.parallel([
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false, // Use native driver for better performance
    }),
    Animated.timing(transformYAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: false, // Use native driver for better performance
    }),

    Animated.sequence([
      Animated.timing(opacityGradient, {
        toValue: 0.6,
        delay: 300,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(gradientScale, {
            toValue: 1.5,
            duration: 1500,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
          Animated.timing(gradientScale, {
            toValue: 1,
            duration: 1500,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
        ]),
      ),
    ]),
  ]).start();

  Animated.timing(blackCoverOpacity, {
    toValue: 0,
    duration: 1200,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();

  return {
    opacityAnim,
    transformYAnim,
    opacityGradient,
    gradientScale,
    blackCoverOpacity,
  };
};
