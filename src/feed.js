import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

const Feed = () => {
  return (
    <>
      <View style={styles.center}>
        <Text style={styles.title}>Navigation React</Text>
        <Button title="Go to Feed Item" onPress={() => {}} />
      </View>
    </>
  );
};

export default Feed;
