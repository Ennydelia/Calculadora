import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

function DetailScreen() {
    const [resultado, setResultado] = useState('0');
    const [operador, setOperador] = useState(null);
    const [valorAnterior, setValorAnterior] = useState(null);

    const handleButtonPress = (value) => {
        setResultado((prevResultado) => {
            if (prevResultado === '0' && value !== '.') {
                return value;
            } else {
                return prevResultado + value;
            }
        });
    };

    const handleClear = () => {
        setResultado('0');
        setOperador(null);
        setValorAnterior(null);
    };

    const handleOperator = (operator) => {
        setOperador(operator);
        setValorAnterior(resultado);
        setResultado('0');
    };

    const calculate = () => {
        const prevValue = parseFloat(valorAnterior);
        const currentValue = parseFloat(resultado);
        switch (operador) {
            case '+':
                return prevValue + currentValue;
            case '-':
                return prevValue - currentValue;
            case '*':
                return prevValue * currentValue;
            case '/':
                return prevValue / currentValue;
            default:
                return currentValue;
        }
    };

    const handleEqual = () => {
        if (operador && valorAnterior !== null && resultado !== null) {
            const newResultado = calculate();
            setResultado(String(newResultado));
            setOperador(null);
            setValorAnterior(null);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}> CALCULADORA </Text>
                <Text style={styles.subtitle}> Basica</Text>
            </View>
            <SafeAreaView style={styles.resultContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Text style={styles.result}>{resultado}</Text>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.buttonsContainer}>
                {/* Botones de la calculadora aquí */}
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Diseñado por: Enedelia Alanis</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9770BE',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
    },
    resultContainer: {
        backgroundColor: '#E9CEFF',
        borderRadius: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
    },
    result: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
    },
    buttonsContainer: {
        flex: 1,
        backgroundColor: '#E9CEFF',
        borderRadius: 12,
        padding: 10,
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 'auto',
    },
    footerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default DetailScreen;
