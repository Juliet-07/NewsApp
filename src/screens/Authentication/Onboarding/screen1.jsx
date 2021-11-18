import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {styles} from './styles';

const index = ({navigation}) => {
  return (
    <MainView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assest/me.jpg')}
          />
        </View>
        <Text style={styles.text}>
          My name is Juliet Ohankwere. {'\n'}Welcome to my Mobile News App.{'\n'}
          You can get latest news on any topic that you want
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
          <FlexView alignItems='flex-end' justifyContent='flex-end'>
            <Text style={styles.number}>1/2</Text>
            <EvilIcons name="arrow-right" style={styles.frontarrow} />
          </FlexView>
        </TouchableOpacity>
      </View>
    </MainView>
  );
};
export default index;
