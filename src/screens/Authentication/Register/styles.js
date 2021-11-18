import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: colors.primary,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  titleStyle:{}
});
