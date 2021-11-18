import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, TextInput, Text} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';
import generateValidationSchema from '../../../config/validators';
import {colors} from '../../../config/colors';
import {AuthContext} from '../../../context/authContext';
const index = ({navigation}) => {
  const initialValues = {
    Email: '',
    Password: '',
  };
  const validate = generateValidationSchema(
    yup,
    ['Email', 'Password'],
    ['EMAIL', 'PASSWORD'],
  );
  const [select, setSelect] = useState(false);
  const {signIn} = useContext(AuthContext);
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <FlexView justifyContent="space-around">
          <View style={styles.header}>
            <Text style={styles.headText}>WELCOME</Text>
          </View>
        </FlexView>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={() => {
            alert('welcome');
          }}>
          {({values, handleChange, handleSubmit}) => (
            <View style={styles.inputs}>
              <View style={{marginBottom: 20}}>
                <TextInput
                  mode="outlined"
                  label="Email"
                  value={values.Email}
                  onChangeText={handleChange('Email')}
                  right={<TextInput.Icon name="email-outline" />}
                  outlineColor={colors.primary}
                  keyboardType="email-address"
                />
              </View>
              <View style={{marginTop: 20}}>
                <TextInput
                  mode="outlined"
                  label="Password"
                  value={values.Password}
                  onChangeText={handleChange('Password')}
                  right={<TextInput.Icon name="eye" />}
                  secureTextEntry
                  outlineColor={colors.primary}
                />
              </View>
              {/* Checkbox */}
              <View style={styles.checkBox}>
                <FlexView>
                  <CheckBox value={select} onValueChange={setSelect} />
                  <Text style={{color: colors.primary}}>Keep me logged in</Text>
                </FlexView>
              </View>
              {/* Button */}
              <View style={styles.button}>
                <Button
                  mode="contained"
                  color={colors.primary}
                  onPress={(() => alert('Welcome'), signIn())}>
                  Login
                </Button>
              </View>
            </View>
          )}
        </Formik>
        {/* End */}
        <FlexView>
          <Text onPress={() => alert('Password Forgotten')}>
            Forgot Password?
          </Text>
        </FlexView>

        <FlexView style={styles.last}>
          <Text>Don't have an account? </Text>
          <Text
            style={{color: colors.primary}}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </FlexView>
      </View>
    </MainView>
  );
};
export default index;
