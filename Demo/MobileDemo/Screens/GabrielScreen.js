import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from 'react-native';
import { Provider as PaperProvider, IconButton, Colors, Caption} from 'react-native-paper';


export default function GabrielScreen() {
    return (
        <PaperProvider>
        <View style={styles.container}>
        <IconButton
        icon="camera"
        size={60}
        color={"#E83D19"}
        onPress={() => Alert.alert("Button Pressed")} />

        </View>
    </PaperProvider>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2:{
        flex: 1,
    },

    text:{
        fontSize:40,
        color: 'black'
    },
  });
  