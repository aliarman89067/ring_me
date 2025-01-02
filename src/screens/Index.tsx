import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {indexStyle} from '../styles/indexStyles';
import {splashScreenAnimes} from '../animations/indexAnime';
import {quotes} from '../constants/data';
import {
  navigate,
  push,
  replace,
  resetAndNavigate,
} from '../utils/useNavigations';

const Index = ({route}: {route: any}) => {
  const params = route?.params;
  const [imageUrl, setImageUrl] = useState<null | string>(null);

  const {blackCoverOpacity} = splashScreenAnimes();

  useEffect(() => {
    if (params) {
      setImageUrl(params);
    } else {
      resetAndNavigate('Home');
    }
  }, []);

  const getRandomQuote = () => {
    const randomNumber = Math.ceil(Math.random() * quotes.length - 1);
    const quote = quotes[randomNumber];
    return (
      <View style={indexStyle.QuoteData}>
        <Text style={indexStyle.quoteText}>{quote.quote}</Text>
        <Text style={indexStyle.quoteAuthor}>{quote.author}</Text>
      </View>
    );
  };

  return (
    <View style={indexStyle.container}>
      <Animated.View
        style={[
          indexStyle.blackCover,
          {opacity: blackCoverOpacity},
        ]}></Animated.View>
      <View style={indexStyle.imageContainer}>
        <Image source={{uri: imageUrl!}} style={indexStyle.image} />
      </View>
      {/* Middle Box */}
      <View style={[indexStyle.quoteContainer]}>
        <Text style={indexStyle.quoteTitle}>Daily Quote</Text>
        {getRandomQuote()}
      </View>
      <TouchableOpacity
        onPress={() => resetAndNavigate('Home')}
        activeOpacity={0.7}
        style={indexStyle.buttonContainer}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
