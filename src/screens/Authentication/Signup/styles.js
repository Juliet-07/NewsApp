import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
  },
  header: {
    marginTop: 20,
    width: '100%',
    marginBottom: 30,
  },
  headText: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
  inputs: {
    flex: 2,
  },
  button: {
    width: 300,
    marginTop: 100,
    marginLeft:30
  },
});
