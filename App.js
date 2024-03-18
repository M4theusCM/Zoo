import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// impotação das telas
import loadingScreen from './Screens/loadingScreen';
import loginScreen from './Screens/loginScreen';
import cadastroScreen from './Screens/cadastroScreen';
import homeScreen from './Screens/homeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loading'>
        <Stack.Screen name="loading" component={loadingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={loginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="cadastro" component={cadastroScreen} options={{headerShown:false}} />
        <Stack.Screen name="home" component={homeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

