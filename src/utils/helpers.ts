import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const widthPer = (per: number) => {
  return (width * per) / 100;
};

export const heightPer = (per: number) => {
  return (height * per) / 100;
};
