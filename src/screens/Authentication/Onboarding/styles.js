import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  skip: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 19,
  },
  aboutText:{
    fontSize: 20,
    color: colors.secondary,
    lineHeight: 30,
  },
  number: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  frontarrow: {
    color: colors.primary,
    fontSize: 35,
  },
  backarrow: {
    color: colors.primary,
    fontSize: 35
  },
});
