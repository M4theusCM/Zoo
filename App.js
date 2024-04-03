import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// impotação das telas
import LoadingScreen from './Screens/loadingScreen';
import LoginScreen from './Screens/loginScreen';
import CadastroScreen from './Screens/cadastroScreen';

import HomeScreen2 from './Screens/HomeScreen2';

// territorios
import TerritorioAzul from './Screens/territorios/azulScreen'
import TerritorioVermelho from './Screens/territorios/vermelhoScreen'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'> */}
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name="Loading" component={LoadingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen2} options={{headerShown:false}} />
        {/* <Stack.Screen name="Home2" component={HomeScreen2} options={{headerShown:false}} /> */}
        <Stack.Screen name="TerritorioAzul" component={TerritorioAzul} options={{headerShown:false}} />
        <Stack.Screen name="TerritorioVermelho" component={TerritorioVermelho} options={{headerShown:false}} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

