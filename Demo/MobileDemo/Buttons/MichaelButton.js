import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

function MyComponent2(navigation) {

    navigation = useNavigation();
    return (
    <Button icon="volume-high" mode="contained" onPress={() => navigation.navigate('Michael Demo')}>
      Readability and Sound
    </Button>
    )
  };
  
export default MyComponent2;

