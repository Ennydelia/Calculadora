import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform} from 'react-native';
import Inicio from './pantallas/Inicio';
import Calculadora from './pantallas/Calculadora';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: Platform.OS === 'web' ? false : true,
        }}>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

