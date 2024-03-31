import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// impotação das telas
import LoadingScreen from './Screens/loadingScreen';
import LoginScreen from './Screens/LoginScreen';
import CadastroScreen from './Screens/CadastroScreen';
import HomeScreen from './Screens/HomeScreen';
import HomeScreen2 from './Screens/HomeScreen2';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name="Loading" component={LoadingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home2" component={HomeScreen2} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

