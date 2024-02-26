import { Alert, Button, StyleSheet } from "react-native";

export default function Boton(props) {
    const handlePress = (valor) => {
        console.log('clic en el botón', valor);
        const name = Alert.prompt("Ingresa un nombre")
    }

    return <Button
        color="#611F80"
        title={props.title}
        onPress={() => handlePress('BOTON')} style={styles.container}
    />
}

const styles = StyleSheet.create({
    container: {
        elevation: 8,       
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
   
});
  