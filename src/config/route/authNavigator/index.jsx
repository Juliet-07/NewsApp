import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../../../screens/Authentication/Onboarding/screen1';
import Screen2 from '../../../screens/Authentication/Onboarding/screen2';
import Register from '../../../screens/Authentication/Register/index';
import Login from '../../../screens/Authentication/Login/index';
import Signup from '../../../screens/Authentication/Signup/index';
const {Navigator, Screen} = createNativeStackNavigator();

const index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Screen1" component={Screen1} />
      <Screen name="Screen2" component={Screen2} />
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};
export default index;
