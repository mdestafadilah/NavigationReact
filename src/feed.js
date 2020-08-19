import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles/styles';

// eslint-disable-next-line prettier/prettier
const Feed = props => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.center}>
        <Text style={styles.title}>Navigation React</Text>
        <Button
          title="Go to Feed Item"
          onPress={() =>
            navigation.navigate('detail', {
              screenName: 'My Detail Screen',
            })
          }
        />
      </View>
    </>
  );
};

export default Feed;
