import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

const Detail = props => {
  console.log(props);
  
  return (
    <>
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen</Text>
        <Button
          title="View Bottom Tabs"
          onPress={() => props.navigation.navigate('bottomtabs')}
        />
        <Button
          title="View Top Tabs"
          onPress={() => props.navigation.navigate('toptabs')}
        />
      </View>
    </>
  );
};

export default Detail;
