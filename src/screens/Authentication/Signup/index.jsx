import React from 'react';
import {View} from 'react-native';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, TextInput, Text} from 'react-native-paper';
import {styles} from './styles';
import generateValidationSchema from '../../../config/validators';
import {colors} from '../../../config/colors';
const index = ({navigation}) => {
  const initialValues = {
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
  };
  const validate = generateValidationSchema(
    yup,
    ['Name', 'Email', 'Password', 'ConfirmPassword'],
    ['NAME', 'EMAIL', 'PASSWORD', 'CONFIRMPASSWORD'],
  );
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <FlexView justifyContent="space-around">
          <View style={styles.header}>
            <Text style={styles.headText}>CREATE ACCOUNT</Text>
          </View>
        </FlexView>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={() => {
            alert('Account Created');
          }}>
          {({values, handleChange, handleSubmit}) => (
            <View style={styles.inputs}>
              <View style={{marginBottom: 20}}>
                <TextInput
                  mode="outlined"
                  label="Name"
                  value={values.Name}
                  onChangeText={handleChange('Name')}
                  outlineColor={colors.primary}
                />
              </View>
              <View style={{marginBottom: 20}}>
                <TextInput
                  mode="outlined"
                  label="Email"
                  value={values.Email}
                  onChangeText={handleChange('Email')}
                  right={<TextInput.Icon name="email-outline" />}
                  outlineColor={colors.primary}
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
              <View style={{marginTop: 20}}>
                <TextInput
                  mode="outlined"
                  label="Confirm Password"
                  value={values.ConfirmPassword}
                  onChangeText={handleChange('ConfirmPassword')}
                  right={<TextInput.Icon name="eye" />}
                  secureTextEntry
                  outlineColor={colors.primary}
                />
              </View>
              {/* Button */}
              <View style={styles.button}>
                <Button
                  mode="contained"
                  color={colors.primary}
                  onPress={() => {
                    alert('Account Created'), navigation.navigate('Login');
                  }}>
                  Create Account
                </Button>
              </View>
            </View>
          )}
        </Formik>
        {/* End */}
      </View>
    </MainView>
  );
};
export default index;
