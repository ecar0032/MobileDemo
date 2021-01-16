import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import MyComponent1 from './Buttons/EtienneButton'
import MyComponent2 from './Buttons/MichaelButton'
import MyComponent3 from './Buttons/GabrielButtonPart1'
import MyComponent4 from './Buttons/MatteoButton'
import MyComponent5 from './Buttons/GabrielButtonPart2'
import MyComponent6 from './Buttons/GabrielButtonPart3'
import EtienneScreen from './Screens/EtienneScreen'
import MichaelScreen from './Screens/MichaelScreen'
import GabrielScreen from './Screens/GabrielScreen'
import AccScreen from './Screens/AccScreen'
import LayoutScreen from './Screens/LayoutScreen'
import MatteoScreen from './Screens/MatteoScreen'

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style ={styles.demoContainer}>

        <View style={styles.titles}>
          <Text style={styles.title}>Material.io</Text>
          <Text style={styles.subtitle}>Demo Implementation</Text>
        </View>

        <View style ={styles.buttons}>
         <MyComponent1 />
        </View>

        <View style ={styles.buttons}>
         <MyComponent2 />
        </View>

        <View style ={styles.buttons}>
         <MyComponent3 />
        </View>
        
        <View style ={styles.buttons}>
         <MyComponent5 />
        </View>

        <View style ={styles.buttons}>
         <MyComponent6 />
        </View>

        <View style ={styles.buttons}>
         <MyComponent4 />
        </View>

      
      </View>


    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Etienne Demo" component={EtienneScreen}/>
        <Stack.Screen name="Michael Demo" component={MichaelScreen}/>
        <Stack.Screen name="Gabriel Demo" component={GabrielScreen}/>
        <Stack.Screen name="AccScreen" component={AccScreen}/>
        <Stack.Screen name="LayoutScreen" component={LayoutScreen}/>
        <Stack.Screen name="Matteo Demo" component={MatteoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  demoContainer: {
    width: '100%',
    height: '100%',
  },

  titles: {
    marginTop: '15%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize : 40 ,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 18 ,
    color: '#5c5e62'
  },

  buttons: {
    width: '100%',
    marginTop: '15%',
    alignItems: 'center'
  }
});
