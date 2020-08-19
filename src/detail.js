import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

// eslint-disable-next-line prettier/prettier
const Detail = props => {
  return (
    <>
      <View style={styles.center}>
        <Text style={styles.title}>{props.route.params.screenName}</Text>
        <Button
          title="View Bottom Tabs"
          onPress={() =>
            props.navigation.navigate('bottomtabs', {name: 'param 1'})
          }
        />
        <Button
          title="View Top Tabs"
          onPress={() =>
            props.navigation.navigate('toptabs', {name: 'param 2'})
          }
        />

        <Button
          title="Pass Data Back"
          onPress={() =>
            props.navigation.navigate('feed', {data: 'Hello data!'})
          }
        />
      </View>
    </>
  );
};

export default Detail;
