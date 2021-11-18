import {StyleSheet} from 'react-native';

export const styles = props =>
  StyleSheet.create({
    main: {
      flexDirection: props.flexDir ? props.flexDir : 'row',
      justifyContent: props.justifyContent ? props.justifyContent : 'center',
      width: 'auto',
      height: 'auto',
      alignItems: props.alignItems ? props.alignItems : 'center',
      margin: props.alignItems ? props.margin : 0,
    },
  });
