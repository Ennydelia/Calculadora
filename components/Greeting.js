import { Text, Touchable, TouchableHighlight, View } from "react-native"

const Greeting = (props) => {

    const viewStyles = { backgroundColor: 'gray' }

    const textStyles = {
        color: 'blue',
        fontSize: 25
    }

    return (
        <View style={viewStyles}>
            <Text style={textStyles}>Hello {props.name}</Text>
        </View>
    )
}

export default Greeting
