import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

function MyComponent5(navigation) {

    navigation = useNavigation();
    return (
    <Button icon="account" mode="contained" onPress={() => navigation.navigate('AccScreen')}>
      Accessibility
    </Button>
    )
  };

export default MyComponent5;