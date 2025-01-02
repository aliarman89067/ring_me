import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/utils/useNavigations';
import Home from './src/screens/Home';
import Gallery from './src/screens/Gallery';
import About from './src/screens/About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Index from './src/screens/Index';
import Splash from './src/screens/Splash';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarBackground: () => (
            <BlurView overlayColor="" blurAmount={15} style={styles.blurView} />
          ),
        }}>
        <Tab.Screen
          name="Splash"
          component={Splash}
          options={{tabBarStyle: {display: 'none'}}}></Tab.Screen>
        <Tab.Screen
          name="Index"
          component={Index}
          options={{tabBarStyle: {display: 'none'}}}></Tab.Screen>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{tabBarStyle: {display: 'none'}}}></Tab.Screen>
        <Tab.Screen name="About" component={About}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
    elevation: 0,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
