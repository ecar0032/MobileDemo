import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

function MyComponent4(navigation) {

    navigation = useNavigation();
    return (
    <Button icon="nfc-tap" mode="contained" onPress={() => navigation.navigate('Matteo Demo')}>
      Communications and States
    </Button>
    )
  };

export default MyComponent4;