import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from 'react-native';
import { Provider as PaperProvider, IconButton, Colors, Caption} from 'react-native-paper';



export default function AccScreen(){

    return(
        
        <PaperProvider>
          
          <View style={styles.container2}>
            <View style={{flex:1, backgroundColor: 'powderblue', alignItems: 'center' }}>
                <Text style={styles.text}>label</Text>
            </View>
            <View style={{flex:1, backgroundColor: '#3554E1', alignItems: 'center' }}>
            <Text style={styles.text}>label</Text>
            </View>
            <View style={{flex:1, backgroundColor: '#032BDE', alignItems: 'center' }}>
            <Text style={styles.text}>label</Text>
            </View>
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
  