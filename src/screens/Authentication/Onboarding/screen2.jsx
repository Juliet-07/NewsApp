import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {styles} from './styles';

const index = ({navigation}) => {
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <View>
          <Text style={styles.aboutText}>
            I am a front-end developer with expertise In HTML, CSS, JavaScript
            and frameworks such as React, Next, React-native. Some of my works includes logistics applications, inventory websites,
            apps for food delivery, news websites e.t.c. {"\n"} My
            software designs are also highly effective and focused on improving
            the productivity of businesses I have worked for. They help these
            businesses gain a competitive advantage in their respective fields.
            With clear communications skills, I tend to deliver beyond the
            expectations of my customers. I visualize their objectives to help
            them achieve their targets, while also prioritizing their goals.
            This process helps my designs to be accurate, efficient, and highly
            productive.{"\n"}
            At my leisure, I enjoy cooking, eating and music.
          </Text>
        </View>
        <FlexView justifyContent='space-between'>
          <TouchableOpacity
            onPress={() => navigation.navigate('Screen1')}>
            <EvilIcons name="arrow-left" style={styles.backarrow} />
          </TouchableOpacity>
          <Text style={styles.number}>2/2</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <EvilIcons name="arrow-right" style={styles.frontarrow} />
          </TouchableOpacity>
        </FlexView>
      </View>
    </MainView>
  );
};
export default index;
