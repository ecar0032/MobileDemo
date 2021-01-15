import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

function MyComponent1(navigation) {

  navigation = useNavigation();
  return (
  <Button icon="navigation" mode="contained" onPress={() => navigation.navigate('Etienne Demo')}>
    Themed Buttons and Navigation
  </Button>
  )
};

export default MyComponent1;