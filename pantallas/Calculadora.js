import {React, useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, ScrollView   } from 'react-native';

function DetailScreen() {
    const [Resultado, setResultado] = useState('0');
    const [operador, setOperador] = useState(null);
    const [valorAnterior, setValorAnterior] = useState(null);

    const handleButtonPress = (value) => {    
        // setResultado((prevResultado) => (prevResultado === '0' ? value : prevResultado + value));
        if (Resultado === '0' || operador) {
            setResultado(value);
            setOperador(null);
          } else {
            // Concatena el valor del botón presionado
            setResultado((prevResultado) => prevResultado + value);
        }
    };

    const handleClear = () => {
        setResultado('0');
        setOperador(null);
        setValorAnterior(null);
    };
    
    const handleOperator = (operator) => {
        // Si ya hay un operador, realiza la operación pendiente
        if (operador) {
          const newResultado = eval(`${valorAnterior} ${operador} ${Resultado}`);
          setResultado(String(newResultado));
          setOperador(operator);
          setValorAnterior(String(newResultado));
        } else {
          // Si es la primera operación, guarda el resultado actual como valor anterior
          setOperador(operator);
          setValorAnterior(Resultado);
        }
    };

    const handleEqual = () => {
        // Si hay un operador pendiente, realiza la operación
        if (operador) {
          const newResultado = eval(`${valorAnterior} ${operador} ${Resultado}`);
          setResultado(String(newResultado));
          setOperador(null);
          setValorAnterior(null);
        }
    };    

    return (
        <View style={styles.container}>
            <View style={styles.BarraInicio}>
                <Text style={[styles.text]}> CALCULADORA <Text style={[styles.textMini]}> Basica</Text></Text>                
                <View style={styles.line}></View>
            </View>
            <View style={styles.espacioEntreVistas}></View>  
            <SafeAreaView  style={styles.Resultado}>
                <ScrollView horizontal style={styles.scrollView}>
                    <Text style={styles.textResultado}>{Resultado}</Text>
                </ScrollView>
            </SafeAreaView >    
            <View style={styles.espacioEntreVistas}></View>       
            <View style={styles.Botones}>
                <View style={styles.rowB1}>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleClear()}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleOperator('/')}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>                    
                </View>
                <View style={styles.rowB2}>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('7')}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('8')}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('9')}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleOperator('*')}>
                        <Text style={styles.buttonText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowB3}>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('4')}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('5')}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('6')}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleOperator('-')}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowB4}>
                    <TouchableOpacity style={[styles.buttonL1]} onPress={() => handleButtonPress('1')}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonL1]} onPress={() => handleButtonPress('2')}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonL1]} onPress={() => handleButtonPress('3')}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleOperator('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.rowB5}>                    
                    <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress('0')}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonL1} onPress={() => handleButtonPress('.')}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.buttonL3} onPress={() => handleEqual()}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>                 
                </View>
            </View>
            <View style={styles.BarraFinal}>
                <View style={styles.line2}></View>
                <Text style={styles.text3}>Diseñado por: Enedelia Alanis  </Text>
            </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#9770BE',
            alignItems: 'center',
        },
        BarraInicio: {
            width: '100%',
            flex: 0.1,   
            alignItems: 'top',
            justifyContent: 'flex-start',         
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
        line: {
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'white',
        },
        
        Resultado: {
            flex: 0.6,
            backgroundColor: '#E9CEFF',  
            width: '90%',
            alignItems: 'end',
            justifyContent: 'flex-start',
            borderRadius: 12,
        },
        
        Botones: {
            flex: 3,  
            backgroundColor: '#E9CEFF',  
            width: '90%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 12,
        },

        rowB1: {
            flexDirection: 'row',
            marginTop: 35,
            marginLeft: 180,
            marginRight: 15,
        },

        buttonL1: {
            width: 70,
            height: 70,
            backgroundColor: '#CD8FFE',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,            
            borderRadius: 8,
        },

        buttonL2: {
            width: 150,
            height: 70,
            backgroundColor: '#CD8FFE',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,            
            borderRadius: 8,
        },

        buttonL3: {
            width: 70,
            height: 70,
            backgroundColor: '#370349',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,            
            borderRadius: 8,
        },

        rowB2: {
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 20,
            marginRight: 15,
        },

        rowB3: {
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 20,
            marginRight: 15,
        },

        rowB4: {
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 20,
            marginRight: 15,
        },

        rowB5: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginLeft: 20,
            marginRight: 15,
        },
        
        button: {
            width: 50,
            height: 50,
            backgroundColor: '#CD8FFE',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,            
            borderRadius: 8,
        },
        
        buttonText: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
        },

        BarraFinal: {
            width: '100%',
            flex: 1,
            alignItems: 'end',
            justifyContent: 'flex-end',
        },

        text3: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15, 
        },

        line2: {
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'white',
        },
        espacioEntreVistas: {
            height: 60, 
        },

        textResultado: {
            color: 'black',
            fontWeight: 'bold',
            padding: 5,
            fontSize: 60, 
            alignItems: 'end',
        },

        scrollView: {          
            marginHorizontal: 20,
        },
    });


export default DetailScreen;
