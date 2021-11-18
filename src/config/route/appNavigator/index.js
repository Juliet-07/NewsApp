import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../../../screens/Main/index';
const {Navigator, Screen} = createNativeStackNavigator();

const index = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Main" component={Main} />
  </Navigator>
);
export default index;
