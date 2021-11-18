// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList} from 'react-native';
// import {Searchbar} from 'react-native-paper';
// import MainView from '../../components/Layouts/MainView'
// import {styles} from './styles'
// import Loader from '../../components/Loader/index';

// const index = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const onChangeSearch = query => setSearchQuery(query);
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);
//   useEffect(() => {
//     fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <MainView>
//       <View style={styles.container}>
//         <View>
//           <Searchbar
//             value={searchQuery}
//             placeholder="Search"
//             onChangeText={onChangeSearch}
//           />
//         </View>
//         <View style={{flex: 1}}>
//           {isLoading ? (
//             <Loader />
//           ) : (
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//               }}>
//               <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
//                 {data.title}
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: 'green',
//                   textAlign: 'center',
//                   paddingBottom: 10,
//                 }}>
//                 Articles:
//               </Text>
//               <FlatList
//                 data={data.articles}
//                 keyExtractor={({id}, index) => id}
//                 renderItem={({item}) => (
//                   <Text>{item.id + '. ' + item.title}</Text>
//                 )}
//               />
//             </View>
//           )}
//         </View>
//       </View>
//     </MainView>
//   );
// };

// export default index;
// Tab Navigator
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function All() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
function Sports() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Sports!</Text>
    </View>
  );
}
function Media() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Media!</Text>
    </View>
  );
}
function Business() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Business!</Text>
    </View>
  );
}

const index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [isLoading, setLoading] = useState(true);
  return (
    <View>
      <View>
        <Searchbar
          value={searchQuery}
          placeholder="Search"
          onChangeText={onChangeSearch}
        />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={All} />
        <Tab.Screen name="Sports" component={Sports} />
        <Tab.Screen name="Media" component={Media} />
        <Tab.Screen name="Business" component={Business} />
      </Tab.Navigator>
    </View>
  );
};
export default index;
