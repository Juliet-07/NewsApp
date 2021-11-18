import React, {useState, useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import ShowMessage, {type} from '../../components/showMessage';
import Loader from '../../components/Loader';
import {AuthContext} from '../../context/authContext';
import AuthNavigator from './authNavigator/index';
import Application from './appNavigator/index';

const index = () => {
  const initialState = {
    isLoading: true,
    userToken: null,
  };
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const token = false;
  //CREATE AUTHREDUCER
  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
      case 'SIGNUP':
        return {
          ...prevState,
          isLoading: false,
          verification: action.email,
        };
    }
  };

  // SET UP USEREDUCER
  const [authState, dispatch] = useReducer(authReducer, initialState);
  // SET UP USEMEMO
  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('user token');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('user token');
      setIsLoading(false);
    },
  }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? <Application /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default index;
