import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from '@react-navigation/native';

import {styles} from './styles/styles';

// eslint-disable-next-line prettier/prettier
const Detail = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const index = useNavigationState(state => state.index);

  console.log(`Screen Index:${index}`);

  useFocusEffect(
    useCallback(() => {
      fetch('https://restcountries.eu/rest/v2/region/europe').then(response => {
        response.json().then(data => {
          // console.log(data);
        });
      });
      return () => console.log('lost focus');
    }),
  );

  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenName}</Text>
      <Button
        title="View Bottom Tabs"
        onPress={() => navigation.navigate('bottomtabs', {name: 'param 1'})}
      />
      <Button
        title="View Top Tabs"
        onPress={() => navigation.navigate('toptabs', {name: 'param 2'})}
      />

      <Button
        title="Pass Data Back"
        onPress={() => navigation.navigate('feed', {data: 'Hello data!'})}
      />
    </View>
  );
};

export default Detail;
