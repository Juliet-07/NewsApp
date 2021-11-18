import React from 'react'
import {createStackNavigator} from '@react-navigation/native-stack'
const { Navigator, Screen } = createStackNavigator();
const index =()=>(
    <Navigator initialRouteName='Home'>
        <Screen name='Home' component={All}/>
    </Navigator>
)
export default index