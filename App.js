import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// impotação das telas
import LoadingScreen from './Screens/loadingScreen';
import LoginScreen from './Screens/loginScreen';
import CadastroScreen from './Screens/cadastroScreen';
import HomeScreen from './Screens/homeScreen';
import WelcomeScreen from './Screens/WelcomeScreen'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name="Loading" component={LoadingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

