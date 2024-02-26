import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet  } from 'react-native';
import Funciones from '../components/Calculos'

function DetailScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={[styles.text]}> CALCULADORA <Text style={[styles.textMini]}> Basica</Text></Text>                
                <View style={styles.line}></View>
            </View>    
            <View style={styles.containerResultado}>
                <Text style={[styles.textResultado]}> 0</Text> 
            </View>  
            <View style={styles.containerDigitos}>
                <Text style={[styles.textResultado]}> 0</Text> 
            </View>                                   
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#BA75F0',
          },
        container2: {
          flex: 1,
          width: '100%',
          alignItems: 'top',
          justifyContent: 'flex-start',
          
        },
        containerResultado: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E9CEFF',
            borderRadius: 12,
            
        },
        containerDigitos: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E9CEFF',
            
        },
        text: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20, 
        },
        textMini: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10, 
        },
        textResultado: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 40, 
        },
          line: {
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'white',
          },
      });


export default DetailScreen;
