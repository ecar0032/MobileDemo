import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

function MyComponent6(navigation) {

    navigation = useNavigation();
    return (
    <Button icon="page-layout-body" mode="contained" onPress={() => navigation.navigate('LayoutScreen')}>
      Layout and Spacing
    </Button>
    )
  };

export default MyComponent6;