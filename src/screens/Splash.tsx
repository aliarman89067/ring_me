import {View, Text, Animated} from 'react-native';
import React, {useEffect} from 'react';
import {splashScreenAnimes} from '../animations/indexAnime';
import {indexStyle} from '../styles/indexStyles';
import {resetAndNavigate} from '../utils/useNavigations';

const Splash = () => {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  const {opacityAnim, transformYAnim, opacityGradient, gradientScale} =
    splashScreenAnimes();

  useEffect(() => {
    let imageUrl: string;
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=cozy&client_id=${accessKey}`,
    )
      .then(async data => {
        const res = await data.json();
        const randomNumber = Math.ceil(Math.random() * res.results.length - 1);
        imageUrl = res.results[randomNumber].urls.regular;
      })
      .catch(error => {
        console.log(error);
      });

    const timeoutId = setTimeout(
      () => resetAndNavigate('Index', imageUrl),
      2000,
    );
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={[indexStyle.splashContainer]}>
      <Animated.Image
        source={require('../assets/images/marshmallow.png')}
        style={[
          indexStyle.splashImage,
          {opacity: opacityAnim, transform: [{translateY: transformYAnim}]},
        ]}
      />
      <Animated.Image
        source={require('../assets/images/mainCircle.png')}
        style={[
          indexStyle.splashGradient,
          {opacity: opacityGradient, transform: [{scale: gradientScale}]},
        ]}
      />
    </View>
  );
};

export default Splash;
