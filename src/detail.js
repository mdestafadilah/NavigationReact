import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

const Detail = () => {
  return (
    <>
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen</Text>
        <Button title="View Bottom Tabs" onPress={() => {}} />
        <Button title="View Top Tabs" onPress={() => {}} />
      </View>
    </>
  );
};

export default Detail;
