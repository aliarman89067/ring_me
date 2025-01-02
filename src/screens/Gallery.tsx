import {View, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../utils/useNavigations';

const Gallery = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <Text>Create +</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gallery;
