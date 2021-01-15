import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

function MyComponent3(navigation) {

    navigation = useNavigation();
    return (
    <Button icon="bell-ring" mode="contained" onPress={() => navigation.navigate('Gabriel Demo')}>
      Iconography and Spacing
    </Button>
    )
  };

export default MyComponent3;