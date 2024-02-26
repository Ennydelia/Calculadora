import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet  } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
            <Text style={[styles.text]}> REACT AVANZADO</Text>
            <View style={styles.line}></View>
        </View>        
        <View style={styles.container3}>
            <Text style={styles.text2}>CALCULADORA</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Calculadora')} style={styles.button}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
        </View>  
        <View style={styles.container4}>
            <View style={styles.line2}></View>
            <Text style={styles.text3}>Diseñado por: Enedelia Alanis  </Text>
        </View>         
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9770BE',
      },
    container2: {
      flex: 1,
      width: '100%',
      alignItems: 'top',
      justifyContent: 'flex-start',
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container4: {
        width: '100%',
        flex: 1,
        alignItems: 'end',
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20, 
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        padding: 20,
        fontSize: 40, 
    },
    text3: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15, 
    },
    button: {
        alignItems: 'top',
        justifyContent: 'center',
        backgroundColor: '#611F80',
        padding: 13,
        borderRadius: 12,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
      line: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'white',
      },
      line2: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'white',
      },
  });
  
export default HomeScreen;
