import React from 'react';
import {View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from './styles';
import {colors} from '../../../config/colors';

const index = ({navigation}) => {
  const {navigate} = navigation
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../../assest/logo.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={{marginBottom: 20, width: 280}}>
            <Button
              mode="contained"
              color={colors.primary}
              onPress={() => navigate('Login')}>
              Sign in
            </Button>
          </View>
          <View style={{marginTop: 20, width: 280}}>
            <Button
              mode="outlined"
              color={colors.primary}
              onPress={() => navigate('Signup')}>
              Sign up
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
export default index;
