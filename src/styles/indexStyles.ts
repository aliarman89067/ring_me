import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {heightPer, widthPer} from '../utils/helpers';
import {fontFamily} from '../constants/fontFamilies';

export const indexStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  quoteContainer: {
    width: '88%',
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.7)',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2},
    borderColor: 'rgba(0,0,0,0.8)',
    borderStyle: 'solid',
    overflow: 'hidden',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  quoteTitle: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fontFamily.OpenSansLight,
    marginBottom: 15,
  },
  quoteText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fontFamily.OpenSansExtraBold,
  },
  quoteAuthor: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fontFamily.OpenSansRegular,
  },
  hideQuote: {
    color: colors.white,
    fontSize: 15,
    textAlign: 'center',
  },
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: widthPer(60),
    height: heightPer(60),
    objectFit: 'contain',
    zIndex: 10,
  },
  splashGradient: {
    width: widthPer(75),
    height: heightPer(75),
    objectFit: 'contain',
    position: 'absolute',
  },
  blackCover: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#000',
    zIndex: 20,
    pointerEvents: 'none',
    userSelect: 'none',
  },
  QuoteData: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  buttonContainer: {
    position: 'absolute',
    width: '88%',
    height: 50,
    backgroundColor: 'red',
    bottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 20,
  },
});
