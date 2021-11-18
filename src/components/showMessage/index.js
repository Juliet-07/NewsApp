import {WSnackBar, WModal} from 'react-native-smart-tip';
import {Alert} from 'react-native';

const types = {
  ERROR: {
    textColor: '#fff',
    backgroundColor: '#bf0002',
    actionText: null,
    actionTextColor: '#bf0002',
    position: WSnackBar.position.TOP,
  },
  DONE: {
    textColor: '#fff',
    backgroundColor: '#0753AB',
    actionText: null,
    actionTextColor: '#bf0002',
    position: WSnackBar.position.TOP,
  },
  ALERT: {
    textColor: '#000',
    backgroundColor: '#fff',
    actionText: 'Show',
    actionTextColor: '#bf0002',
    position: WSnackBar.position.TOP,
  },
};

export default (type, message, url) => {
  const snackBarOpts = {
    data:
      message,
    position: WSnackBar.position.BOTTOM,
    duration: WSnackBar.duration.LONG,
    ...types[type],
    numberOfLines: 3,
    onActionHide: () => {
      Alert.alert(`To redirect to ${url} !`);
    },
  };
  WSnackBar.show(snackBarOpts);
};

export const type = {
  ERROR: 'ERROR',
  DONE: 'DONE',
  ALERT: 'ALERT',
};
