/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import Route from './src/config/route/index';

const App = () => {
  return (
    <PaperProvider>
      <Route />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
