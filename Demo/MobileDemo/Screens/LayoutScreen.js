import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView} from 'react-native';
import { Provider as PaperProvider, IconButton, Colors, Caption, Appbar, Drawer} from 'react-native-paper';
import {Grid, Section, Block} from 'react-native-responsive-layout';
import * as ScreenOrientation from 'expo-screen-orientation';




async function changeScreenOrientation() {
    await ScreenOrientation.unlockAsync();
  }

export default function LayoutScreen(){

        changeScreenOrientation();

    return(
        
        <PaperProvider>


            <ScrollView>
            
            <Grid>
            <Section>
                <Block xsSize="1/2" smSize="1/2" mdSize="1/3">
                <Image source={require('../assets/umcrest.png')} accessibilityLabel="University of Malta Logo" />
                    </Block> 
                <Block xsSize="1/2" smSize="1/2" mdSize="1/3">
                <Image source={require('../assets/umcrest.png')} accessibilityLabel="University of Malta Logo" />
                    </Block> 
                <Block xsSize="1/2" smSize="1/2" mdSize="1/3"> 
                <Image source={require('../assets/umcrest.png')} accessibilityLabel="University of Malta Logo" />
                </Block>
                <Block xsSize="1/2" smSize="1/2" mdSize="1/3"> 
                <Image source={require('../assets/umcrest.png')} accessibilityLabel="University of Malta Logo" />
                </Block> 
                <Block xsSize="1/2" smSize="1/2" mdSize="1/3"> 
                <Image source={require('../assets/umcrest.png')} accessibilityLabel="University of Malta Logo" />
                </Block>
                <Block xsSize="1/2" smSize="1/2" mdSize="1/3"> 
                <Image source={require('../assets/umcrest.png')} accessibilityLabel="University of Malta Logo" />
                </Block> 
                </Section>
            </Grid>
            </ScrollView>
                
            
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
  